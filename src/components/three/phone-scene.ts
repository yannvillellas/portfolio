import * as THREE from "three";
import { light, motion } from "./phone-geometry";
import { createPhoneModel } from "./phone-model";

export interface PhoneSceneHandle {
  setActive: (index: number) => void;
  update: (progress: number, reduced?: boolean) => void;
  applyTheme: () => void;
  resize: () => void;
  dispose: () => void;
}

export async function createPhoneScene(
  canvas: HTMLCanvasElement,
  urls: string[],
): Promise<PhoneSceneHandle> {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = light.day.exposure;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0, 7.6);

  const pmrem = new THREE.PMREMGenerator(renderer);

  const STUDIO: [number, number, number, number, number][] = [
    [-8, 2.4, -2.5, 1.6, 4.4],
    [7.5, 1.4, 1.6, 1.4, 4.0],
    [0, 7, -4, 6.0, 1.4],
    [-3, -5.5, 2, 5.0, 1.2],
  ];

  const buildRoom = (brightness: number) => {
    const room = new THREE.Scene();
    room.background = new THREE.Color(0x050506);
    for (const [x, y, z, w, h] of STUDIO) {
      const panel = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(brightness, brightness, brightness * 1.02),
        }),
      );
      panel.position.set(x, y, z);
      panel.lookAt(0, 0, 0);
      room.add(panel);
    }
    const target = pmrem.fromScene(room, 0.02);

    room.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      if (object.material instanceof THREE.MeshBasicMaterial) {
        object.material.dispose();
      }
    });

    return target.texture;
  };

  const envDay = buildRoom(9);
  const envNight = buildRoom(5);

  scene.environment = envDay;
  scene.environmentIntensity = light.day.environment;

  let model;

  try {
    model = await createPhoneModel(urls);
  } catch (error) {
    envDay.dispose();
    envNight.dispose();
    pmrem.dispose();
    renderer.dispose();
    throw error;
  }

  scene.add(model.group);

  const key = new THREE.DirectionalLight(0xffffff, light.day.key);
  key.position.set(-4.2, 3.2, 2.4);
  const fill = new THREE.DirectionalLight(0xffffff, 0.5);
  fill.position.set(4, -1.6, 1.6);
  const rim = new THREE.DirectionalLight(0xffffff, light.day.rim);
  rim.position.set(0.6, 2.4, -3.2);
  const ambient = new THREE.AmbientLight(0xffffff, light.day.ambient);
  const pass = new THREE.DirectionalLight(0xffffff, 0);
  scene.add(key, fill, rim, ambient, pass);

  const start = performance.now();
  const resize = () => {
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  };
  resize();

  const applyTheme = () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    const values = dark ? light.night : light.day;
    renderer.toneMappingExposure = values.exposure;
    key.intensity = values.key;
    ambient.intensity = values.ambient;
    rim.intensity = values.rim;
    scene.environmentIntensity = values.environment;
    scene.environment = dark ? envNight : envDay;
  };
  applyTheme();

  const setActive = (index: number) => {
    model.screens.forEach((screen, screenIndex) => {
      screen.userData.targetOpacity = screenIndex === index ? 1 : 0;
    });
  };
  setActive(0);

  const update = (progress: number, reduced = false) => {
    const elapsed = (performance.now() - start) / 1000;
    const range = motion.desktopRotation;
    const breathing = motion.breathing;
    model.group.rotation.y = reduced
      ? (1 - progress) * range
      : (1 - progress) * range + Math.sin(elapsed * 0.55) * breathing;
    model.group.rotation.x = 0.05 - Math.sin(progress * Math.PI) * 0.06;
    model.group.position.y = reduced
      ? 0.05
      : 0.05 + Math.sin(elapsed * 0.8) * 0.018;
    model.screens.forEach((screen) => {
      const target =
        screen.userData.targetOpacity ??
        (screen.material.opacity > 0.5 ? 1 : 0);
      screen.material.opacity += (target - screen.material.opacity) * 0.2;
    });
    const cycle = (elapsed % 10) / 10;
    const sweep = Math.min(1, cycle / 0.14);
    pass.intensity = reduced ? 0 : Math.sin(Math.PI * sweep) * 1.5;
    pass.position.set(-5 + sweep * 10, 2.2, 2);
    renderer.render(scene, camera);
  };

  const dispose = () => {
    model.dispose();
    envDay.dispose();
    envNight.dispose();
    pmrem.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  };

  return { setActive, update, applyTheme, resize, dispose };
}

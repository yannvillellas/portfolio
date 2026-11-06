import * as THREE from "three";
import { phone } from "./phone-geometry";
import { drawPlate, loadImage } from "./phone-texture";

function roundedShape(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2 + radius, -height / 2);
  shape.lineTo(width / 2 - radius, -height / 2);
  shape.quadraticCurveTo(
    width / 2,
    -height / 2,
    width / 2,
    -height / 2 + radius,
  );
  shape.lineTo(width / 2, height / 2 - radius);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2);
  shape.lineTo(-width / 2 + radius, height / 2);
  shape.quadraticCurveTo(
    -width / 2,
    height / 2,
    -width / 2,
    height / 2 - radius,
  );
  shape.lineTo(-width / 2, -height / 2 + radius);
  shape.quadraticCurveTo(
    -width / 2,
    -height / 2,
    -width / 2 + radius,
    -height / 2,
  );
  return shape;
}

export interface PhoneModel {
  group: THREE.Group;
  screens: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[];
  dispose: () => void;
}

export async function createPhoneModel(urls: string[]): Promise<PhoneModel> {
  const images = await Promise.all(urls.map(loadImage));
  const group = new THREE.Group();
  const body = phone.body;
  const bodyGeometry = new THREE.ExtrudeGeometry(
    roundedShape(body.width - 0.03, body.height - 0.03, phone.bodyRadius),
    {
      depth: body.depth - 0.045,
      bevelEnabled: true,
      bevelThickness: 0.022,
      bevelSize: phone.bevel,
      bevelSegments: 5,
      curveSegments: 24,
      steps: 1,
    },
  );
  bodyGeometry.center();
  const frameMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x0a0a0c,
    metalness: 0.25,
    roughness: 0.42,
  });
  group.add(new THREE.Mesh(bodyGeometry, frameMaterial));

  const textures = images.map((image) => drawPlate(image, phone));
  const screenGeometry = new THREE.PlaneGeometry(
    phone.plate.width,
    phone.plate.height,
  );
  const screens = textures.map((texture, index) => {
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: index === 0 ? 1 : 0,
      depthWrite: false,
    });
    material.toneMapped = false;
    const mesh = new THREE.Mesh(screenGeometry, material);
    mesh.position.z = body.depth / 2 + 0.002;
    mesh.renderOrder = 1 + index;
    mesh.userData.targetOpacity = index === 0 ? 1 : 0;
    group.add(mesh);
    return mesh;
  });

  return {
    group,
    screens,
    dispose: () => {
      bodyGeometry.dispose();
      screenGeometry.dispose();
      frameMaterial.dispose();
      screens.forEach((screen) => screen.material.dispose());
      textures.forEach((texture) => texture.dispose());
    },
  };
}

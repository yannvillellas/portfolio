import * as THREE from "three";
import type { phone as PhoneShape } from "./phone-geometry";

type PhoneDimensions = typeof PhoneShape;

function roundedPath(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height,
  );
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

export async function loadImage(url: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = url;
  await image.decode();
  return image;
}

export function drawPlate(
  image: HTMLImageElement,
  phone: PhoneDimensions,
): THREE.CanvasTexture {
  const width = phone.textureWidth;
  const scale = width / phone.plate.width;
  const height = Math.round(phone.plate.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas 2D unavailable");

  const radius = (phone.plate.radius / phone.plate.width) * width;
  roundedPath(context, 0, 0, width, height, radius);
  context.fillStyle = "#08080b";
  context.fill();

  const screenWidth = phone.screen.width * scale;
  const screenHeight = phone.screen.height * scale;
  const x = (width - screenWidth) / 2;
  const y = (height - screenHeight) / 2;
  const innerRadius = Math.max(8, radius - x);
  roundedPath(context, x, y, screenWidth, screenHeight, innerRadius);
  context.clip();

  const cover = Math.max(
    screenWidth / image.width,
    screenHeight / image.height,
  );
  const drawWidth = image.width * cover;
  const drawHeight = image.height * cover;
  context.drawImage(
    image,
    x + (screenWidth - drawWidth) / 2,
    y + (screenHeight - drawHeight) / 2,
    drawWidth,
    drawHeight,
  );

  context.beginPath();
  context.arc(
    width / 2,
    y + phone.punchHole.top * screenHeight,
    phone.punchHole.radius * scale,
    0,
    Math.PI * 2,
  );
  context.fillStyle = "#050507";
  context.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

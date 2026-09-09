import { readFileSync } from "fs";

export interface ImageSize {
  width: number;
  height: number;
}

export function getImageSize(publicPath: string): ImageSize | null {
  try {
    const buf = readFileSync(`${process.cwd()}/public${publicPath}`);
    if (buf.length < 24) return null;

    if (buf.readUInt32BE(0) === 0x89504e47) {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }

    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      while (offset + 9 < buf.length) {
        if (buf[offset] !== 0xff) {
          offset++;
          continue;
        }
        const marker = buf[offset + 1];
        if (
          marker >= 0xc0 &&
          marker <= 0xcf &&
          marker !== 0xc4 &&
          marker !== 0xc8 &&
          marker !== 0xcc
        ) {
          return {
            height: buf.readUInt16BE(offset + 5),
            width: buf.readUInt16BE(offset + 7),
          };
        }
        const length = buf.readUInt16BE(offset + 2);
        offset += 2 + length;
      }
    }

    return null;
  } catch {
    return null;
  }
}

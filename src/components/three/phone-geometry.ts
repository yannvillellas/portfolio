const BEZEL = (1.6 / 72) * 1.55;
const SCREEN = { width: 3.14 * (1080 / 2400), height: 3.14 };
const BODY = {
  width: SCREEN.width + 2 * BEZEL,
  height: SCREEN.height + 2 * BEZEL,
  depth: 0.185,
};

export const phone = {
  body: BODY,
  screen: SCREEN,
  plate: {
    width: BODY.width - 0.03,
    height: BODY.height - 0.03,
    radius: 0.19,
  },
  bodyRadius: 0.19,
  bevel: 0.014,
  textureWidth: 540,
  punchHole: { radius: 0.031, top: 0.036 },
};

export type PhoneDimensions = typeof phone;

export const light = {
  day: { exposure: 1.35, key: 3.0, ambient: 0.3, environment: 1.25, rim: 1.0 },
  night: { exposure: 1.2, key: 2.2, ambient: 0.16, environment: 1.0, rim: 1.6 },
};

export const motion = {
  desktopRotation: 0.55,
  turnCurve: 3.2,
  roll: 0.05,
  breathing: 0.07,
  mobileBreathing: 0.02,
};

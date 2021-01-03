export const Z_INDEX = {
  DROPDOWN: 10000
}

export const SYSTEM_COLOR = {
  // CORNFLOWER_BLUE: "#425A70",
  // STALE_GRAY: '#66788A',
  // SUN: '#F9A409',
  // TUNA: '#222222',
  AQUA_HAZE: '#F1F5F7',
  BRANDY_PUNCH: '#D9822B',
  CINNABAR: '#EC4C47',
  DENIM: '#1070CA',
  DOVE_GREY: '#717171',
  MINE_SHAFT: '#353745',
  OCEAN_GREEN: '#47B881',
  SILVER: '#BCBBBB',
  SWAMP: '#00171F',
  WHITE: '#FFFFFF'
}

export const COLOR = {
  // PRIMARY: SYSTEM_COLOR.SUN,

  BACKGROUND_DARKEST: SYSTEM_COLOR.SWAMP,
  BACKGROUND_LIGHT: SYSTEM_COLOR.AQUA_HAZE,
  BACKGROUND_WHITE: SYSTEM_COLOR.WHITE,
  BORDER: SYSTEM_COLOR.SILVER,
  TEXT: SYSTEM_COLOR.MINE_SHAFT,
  TEXT_LIGHT: SYSTEM_COLOR.DOVE_GREY,
  TEXT_WHITE: SYSTEM_COLOR.AQUA_HAZE,

  DANGER: SYSTEM_COLOR.CINNABAR,
  SUCCESS: SYSTEM_COLOR.OCEAN_GREEN,
  WARNING: SYSTEM_COLOR.BRANDY_PUNCH,
  INFO: SYSTEM_COLOR.DENIM
}

export const BREAKPOINT = {
  // XS: '320px',
  S: '498px',
  M: '768px'
  // L: '1024px',
  // XL: '1280px'
}

export const MEDIA_QUERY = {
  // XS_AND_DOWN: `@media screen and (max-width: ${BREAKPOINT.XS})`,
  S_AND_DOWN: `@media screen and (max-width: ${BREAKPOINT.S})`,
  M_AND_DOWN: `@media screen and (max-width: ${BREAKPOINT.M})`
  // L_AND_DOWN: `@media screen and (max-width: ${BREAKPOINT.L})`,
  // XL_AND_DOWN: `@media screen and (max-width: ${BREAKPOINT.XL})`,

  // XS_AND_UP: `@media screen and (min-width: ${BREAKPOINT.XS})`,
  // S_AND_UP: `@media screen and (min-width: ${BREAKPOINT.S})`,
  // M_AND_UP: `@media screen and (min-width: ${BREAKPOINT.M})`,
  // L_AND_UP: `@media screen and (min-width: ${BREAKPOINT.L})`,
  // XL_AND_UP: `@media screen and (min-width: ${BREAKPOINT.XL})`
}

// export const SPACER = {
//   NONE: '0px',
//   XXS: '4px',
//   XS: '8px',
//   S: '12px',
//   M: '16px',
//   L: '20px',
//   XL: '32px',
//   XXL: '64px',
// }

// export const SPACERS = Object.values(SPACER)

// export const LAYOUT = {
//   FULL: `
//     height: 100%;
//     ${getFixedSize('100%')}
//   `,
// }

// export const SHADOW = {
//   BOX: '0 15px 45px 0 rgba(0, 0, 0, 0.1)',
// }

// // TODO: define gradient for backgrounds
// // export const GRADIENT = {
// //   FADE_BLUE: `linear-gradient(180deg, ${Color.BLUE_DODGER} 0%, ${Color.BLUE_RIBBON} 100%)`,
// //   FADE_PURPLE: `linear-gradient(180deg, ${Color.CORNFLOWER_MAUVE} 0%, ${Color.CORNFLOWER_MAUVE_LIGHT} 100%)`,
// // };

export const FONT_FAMILY = {
  DEFAULT: "'Montserrat', sans-serif"
}

export const FONT_SIZE_TITLE = {
  XL: '52px',
  L: '42px',
  M: '32px',
  S: '22px',
  XS: '18px'
}

export const LINE_HEIGHT_TITLE = {
  XL: '58px',
  L: '48px',
  M: '36px',
  S: '26px',
  XS: '22px'
}

export const FONT_SIZE_TEXT = {
  L: '18px',
  M: '16px',
  S: '14px',
  XS: '12px'
}

export const LINE_HEIGHT_TEXT = {
  L: '24px',
  M: '20px',
  S: '18px',
  XS: '16px'
}

export const RADIUS = {
  DEFAULT: '8px'
}

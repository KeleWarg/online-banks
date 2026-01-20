// Design system constants for consistent styling
export const COLORS = {
  primary: '#007ac8',
  secondary: '#f3c060',
  text: {
    primary: '#1e2125',
    secondary: '#606f7f',
    muted: '#6a6a6a',
  },
  background: {
    white: '#ffffff',
    gray: '#f8f8fa',
    muted: '#eceff3',
  },
  border: {
    light: '#CED4DB',
    muted: '#CED4DB',
  }
} as const;

export const FONTS = {
  primary: 'Work Sans',
  heading: 'Schnyder S',
  headingBold: 'Schnyder S',
  graphik: 'Graphik',
  inter: 'Inter',
} as const;

export const SHADOWS = {
  card: '0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)',
  button: '0px_8px_16px_-3px_rgba(0,0,0,0.10)',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

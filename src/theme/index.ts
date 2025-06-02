// Shared theme properties
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

const typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold' as const,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
};

// Color palette (shared between themes)
const colorPalette = {
  primary: '#2E5BFF',
  secondary: '#8C54FF',
  success: '#2ED573',
  danger: '#FF4757',
  warning: '#FFBE21',
  info: '#00C1D4',
  white: '#FFFFFF',
  black: '#000000',
  textColorTitle: '#000000',
  textColorHeading: '#181D27',
  textColorBody: '#535862',
  gray: {
    100: '#F7F8FC',
    200: '#EDF0F7',
    300: '#D8DCE6',
    400: '#BFC5D2',
    500: '#A6AEBE',
    600: '#8E98AA',
    700: '#6E7683',
    800: '#4E545F',
    900: '#2E323A',
  },
};

// Light Theme
export const lightTheme = {
  spacing,
  typography,
  colors: {
    ...colorPalette,
    background: '#EBEBEB',
    text: '#181D27',
    cardBackground: '#FFFFFF',
    border: '#D8DCE6',
    surface: '#FFFFFF',
    textSecondary: '#535862',
  },
};

// Dark Theme
export const darkTheme = {
  spacing,
  typography,
  colors: {
    ...colorPalette,
    background: '#121212',
    text: '#F5F5F5',
    cardBackground: '#1E1E1E',
    border: '#333333',
    surface: '#1E1E1E',
    textSecondary: '#A6AEBE',
    // Override specific colors for dark mode if needed
    primary: '#5B8AFF',
    secondary: '#A57AFF',
  },
};

// Default export
export const theme = lightTheme;

// Type definitions
export type ThemeColors = typeof lightTheme.colors;
export type ThemeSpacing = typeof spacing;
export type ThemeTypography = typeof typography;
export type AppTheme = {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
};
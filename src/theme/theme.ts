export const theme = {
    colors: {
      primary: '#2E5BFF',
      secondary: '#8C54FF',
      background: '#FFFFFF',
      text: '#1E1E2D',
      // ... other light theme colors
    },
    spacing: { /* ... */ },
    typography: { /* ... */ }
  };
  
  export const darkTheme = {
    colors: {
      primary: '#5B8AFF',
      secondary: '#A57AFF',
      background: '#121212',
      text: '#F5F5F5',
      // ... other dark theme colors
    },
    spacing: { /* ... same as light theme ... */ },
    typography: { /* ... same as light theme ... */ }
  };
  
  export type AppTheme = typeof theme | typeof darkTheme;
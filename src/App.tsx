import React from 'react';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './assets/theme/theme';
import { Button } from './components/UI/Button/Button';

const AppContent = () => {
  return (
    <div>
      <h1>HEllo world</h1>
      <Button>asdf</Button>
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <AppContent />
    </ThemeProvider>
  );
};

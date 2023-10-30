import React from 'react';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './assets/theme/theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainPage } from './pages/MainPage';

const AppContent = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </ThemeProvider>
  );
};

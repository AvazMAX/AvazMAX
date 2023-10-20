import React from 'react';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './assets/theme/theme';
import { Test } from './layout/test/Test';
import { Provider } from 'react-redux';
import { store } from './store';
import { TestAnswer } from './layout/test/TestAnswer';
import { MainPage } from './pages/MainPage';

const AppContent = () => {
  return (
    <div>
      <MainPage />
      <Test />
      <TestAnswer />
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

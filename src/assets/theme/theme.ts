import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      primary: {
        main: string;
        black: string;
        gray: string;
        greenLinerGradient: string;
        green: string;
        backgroundAdmin: string;
      };
      secondary: {
        input: string;
        main: string;
        whiteRadialGradient: string;
        secondWhite: string;
        gray: string;
        orange: string;
      };
      tertiary: {
        main: string;
        secondWhite: string;
        red: string;
        firstBlue: string;
        secondBlue: string;
      };
    };
    customTypography: {
      mainfontFamily: string;
      secondFontFamily: string;
      fontSize: number;
    };
  }

  interface ThemeOptions {
    customPalette?: {
      primary?: {
        main: string;
        black: string;
        gray: string;
        greenLinerGradient: string;
        green: string;
        backgroundAdmin: string;
      };
      secondary?: {
        input: string;
        main: string;
        whiteRadialGradient: string;
        secondWhite: string;
        gray: string;
        orange: string;
      };
      tertiary?: {
        main: string;
        secondWhite: string;
        red: string;
        firstBlue: string;
        secondBlue: string;
      };
    };
    customTypography?: {
      mainfontFamily: string;
      fontSize: number;
    };
  }
}

export const appTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: '90%'
          }
        }
      }
    }
  },
  customPalette: {
    primary: {
      main: '#FFFFFF',
      black: '#222222',
      gray: '#4D4E51',
      greenLinerGradient: 'rgb(12,187,107)',
      green: '#048741',
      backgroundAdmin: '#F5F5F5'
    },
    secondary: {
      input: '#D9D9D9',
      main: '#E0E2E7',
      whiteRadialGradient: '#e4e7ee',
      secondWhite: '#F3F1F1',
      gray: '#959595',
      orange: '#E4772F'
    },
    tertiary: {
      main: '#DBEBFF',
      secondWhite: '#DBF0E5',
      red: '#F91515',
      firstBlue: '#3977C0',
      secondBlue: '#346EFB'
    }
  },
  customTypography: {
    mainfontFamily: 'Poppins',
    fontSize: 16
  }
});

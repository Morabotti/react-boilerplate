import { createTheme, Theme } from '@mui/material/styles';

import palette from './palette';

declare module '@mui/styles' {
  type DefaultTheme = Theme;
}

const theme = createTheme({
  palette,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    snackbar: 1250
  }
});

export default theme;

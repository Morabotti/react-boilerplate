import { PaletteOptions } from '@mui/material/styles/createPalette';

const white = '#fff';
const black = '#000';

const palette: PaletteOptions = {
  common: {
    white,
    black
  },
  primary: {
    contrastText: white,
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884'
  },
  secondary: {
    contrastText: black,
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d'
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: white
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: white,
    default: '#eaeff1'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  }
};

export default palette;

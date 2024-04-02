import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  border: {
    borderBottom: '1px solid #000000',
  },
  background: {
    white: '#ffffff',
    main: '#fff',
    primary: '#F6F6F6',
    mask: 'rgba(66, 66, 66, 0.1)',
    offers: '#19B052',
    black: '#000000',
    gray: '#9e9e9e',
    catalogMsk: 'rgba(166, 166, 166, 0.1)',
    catalogMskGray: 'rgba(20, 20, 20, 0.1)',
  },
  fontWeight: {
    main: '400',
    bold: '600',
    light: '300',
  },
  textColor: {
    main: '#000000',
    danger: '#CC0000',
    gray: '#9e9e9e',
  },
  title: {
    color: '#000000',
    fz: {
      l: '34px',
      m: '24px',
      s: '20px',
    },
  },
  subTitle: {
    color: '#000000',
    fz: {
      s: '20px',
    },
  },
  sectionsParagraphs: {
    color: '#000000',
    fz: {
      l: '16px',
      m: '14px',
      s: '12px',
      sm: '10px',
    },
  },
  button: {
    color: {
      primary: '#ffffff',
      black: '#000000',
    },
    backgroundColor: {
      gray: 'rgba(0, 0, 0, 0.7)',
      grayOpacity: 'rgba(0, 0, 0, 0.1)',
    },
    fz: {
      m: '14px',
    },
    br: {
      s: '2px',
    },
  },
  spacing: {
    button: {
      padding: {
        primary: '8px 24px',
      },
    },
    miniCard: {
      bottom: '10px',
    },
  },
});

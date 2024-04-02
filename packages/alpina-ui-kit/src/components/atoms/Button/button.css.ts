import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../style/theme.css';
export const buttonBase = style({
  fontFamily: 'Gotham Pro',
  display: 'flex',
  width: '100%',
  height: '50px',
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.button.fz.m,
  justifyContent: 'center',
  lineHeight: '16px',
  letterSpacing: '0.25px',
  minWidth: '112px',
  alignItems: 'center',
  border: vars.border.borderBottom,
  borderRadius: vars.button.br.s,
  padding: vars.spacing.button.padding.primary,
  cursor: 'pointer',
  transition: 'background-color 0.3s',
});

export const variantFill = styleVariants({
  baseBlack: [
    buttonBase,
    {
      backgroundColor: vars.background.black,
      color: vars.button.color.primary,
      ':hover': {
        backgroundColor: vars.button.backgroundColor.gray,
      },
    },
  ],
  transparentFill: [
    buttonBase,
    {
      backgroundColor: vars.background.white,
      color: vars.button.color.black,
      ':hover': {
        backgroundColor: vars.button.backgroundColor.grayOpacity,
      },
    },
  ],
  smallButtonBlack: [
    buttonBase,
    {
      height: 'initial',
      backgroundColor: vars.background.black,
      color: vars.button.color.primary,
      ':hover': {
        backgroundColor: vars.button.backgroundColor.gray,
      },
    },
  ],
  smallButtonWhite: [
    buttonBase,
    {
      height: 'initial',
      backgroundColor: vars.background.white,
      ':hover': {
        backgroundColor: vars.button.backgroundColor.grayOpacity,
      },
    },
  ],
});

import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/theme.css';

export const baseLine = style({
  width: '100%',
  borderBottom: vars.border.borderBottom,
  transition: 'width 0.5s',
});

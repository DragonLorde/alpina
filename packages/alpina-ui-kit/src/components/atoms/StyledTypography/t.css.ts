import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../style/theme.css';
import { baseLine } from '../BottomLine/BottomLine.css';

export const baseFont = style({
  fontFamily: 'Gotham Pro',
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  lineHeight: '20px',
});

globalStyle(`${baseFont}:hover > ${baseLine} `, {
  width: 0,
});

export const dangerColor = style({
  color: vars.textColor.danger,
});

export const grayColor = style({
  color: vars.textColor.gray,
});

export const baseColor = style({
  color: vars.textColor.main,
});

export const variantLight = styleVariants({
  baseL: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.l,
      fontWeight: vars.fontWeight.light,
      '@media (max-width: 767px)': {
        fontSize: vars.sectionsParagraphs.fz.m,
      },
    },
  ],
  baseM: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.m,
      fontWeight: vars.fontWeight.light,
    },
  ],
  baseS: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.s,
      fontWeight: vars.fontWeight.light,
    },
  ],
  baseSm: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.sm,
      fontWeight: vars.fontWeight.light,
    },
  ],
});

export const variantBold = styleVariants({
  baseL: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.l,
      fontWeight: vars.fontWeight.bold,
    },
  ],
  baseM: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.m,
      fontWeight: vars.fontWeight.bold,
    },
  ],
  baseS: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.s,
      fontWeight: vars.fontWeight.bold,
    },
  ],
  baseSm: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.sm,
      fontWeight: vars.fontWeight.bold,
    },
  ],
});

export const variantMedium = styleVariants({
  baseL: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.l,
      fontWeight: vars.fontWeight.main,
    },
  ],
  baseM: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.m,
      fontWeight: vars.fontWeight.main,
    },
  ],
  baseS: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.s,
      fontWeight: vars.fontWeight.main,
    },
  ],
  baseSm: [
    baseFont,
    {
      fontSize: vars.sectionsParagraphs.fz.sm,
      fontWeight: vars.fontWeight.main,
    },
  ],
});

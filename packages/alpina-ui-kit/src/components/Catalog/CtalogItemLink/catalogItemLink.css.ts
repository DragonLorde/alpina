import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../../style/theme.css';

export const Link = style({
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  alignItems: 'center',
  width: '216px',
  '@media (max-width: 767px)': {
    width: '40%',
  },
});

export const CatalogItemLinkCss = style({
  marginBottom: vars.spacing.miniCard.bottom,
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'filter 0.3s',
  aspectRatio: '1',
});

export const ImgCatalog = style({
  width: '100%',
  '@media (max-width: 767px)': {
    width: 'inherit',
  },
});

export const CatalogItemLinkCssBackground = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: vars.background.catalogMsk,
  zIndex: '1',
  top: '0',
  left: '0',
  transition: 'background 0.3s',
});

globalStyle(`${CatalogItemLinkCss}:hover > ${CatalogItemLinkCssBackground} `, {
  backgroundColor: vars.background.catalogMskGray,
});

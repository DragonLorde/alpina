import React, { FC } from 'react';
import Link from 'next/link';
import * as s from './catalogItemLink.css';
import { StyledTypography, sT } from '../../atoms';

export interface CatalogItemLinkModel {
  link: string;
  src: string;
  alt: string;
  text: string;
}

export const CatalogItemLink: FC<CatalogItemLinkModel> = ({ link, src, alt, text }) => {
  return (
    <Link className={s.Link} href={link ?? ''}>
      <div className={s.CatalogItemLinkCss}>
        <img className={s.ImgCatalog} alt={alt} src={src} />
        <div className={s.CatalogItemLinkCssBackground}></div>
      </div>
      <StyledTypography styleOverride={sT.variantLight.baseL}>{text}</StyledTypography>
    </Link>
  );
};

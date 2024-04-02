import * as styles from './button.css';
import { FC, PropsWithChildren } from 'react';

export interface ButtonStyled {
  styleOverride?: string;
}

export const ButtonStyled: FC<PropsWithChildren<ButtonStyled>> = ({ children, styleOverride }) => {
  return <button className={styleOverride ?? styles.buttonBase}>{children}</button>;
};

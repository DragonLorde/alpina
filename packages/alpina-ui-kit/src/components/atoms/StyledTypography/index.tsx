import { FC, PropsWithChildren } from 'react';
import * as s from './t.css';
import { T } from './T';

export interface TModel {
  styleOverride?: string;
  isDanger?: boolean;
  isGray?: boolean;
  withBottomLine?: boolean;
}

export const StyledTypography: FC<PropsWithChildren<TModel>> = ({
  children,
  styleOverride,
  isDanger,
  isGray,
  withBottomLine = false,
}) => {
  if (isDanger) {
    return (
      <T styleOverride={`${s.dangerColor} ${styleOverride}`} withBottomLine={withBottomLine}>
        {children}
      </T>
    );
  }
  if (isGray) {
    return (
      <T styleOverride={`${s.grayColor} ${styleOverride}`} withBottomLine={withBottomLine}>
        {children}
      </T>
    );
  }
  return (
    <T styleOverride={`${s.baseColor} ${styleOverride}`} withBottomLine={withBottomLine}>
      {' '}
      {children}{' '}
    </T>
  );
};

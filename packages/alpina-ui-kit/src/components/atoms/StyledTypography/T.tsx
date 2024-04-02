import { FC, PropsWithChildren } from 'react';
import { TModel } from './index';
import { BottomLine } from '../BottomLine';

export const T: FC<PropsWithChildren<TModel>> = ({ styleOverride, withBottomLine, children }) => {
  return (
    <span className={styleOverride}>
      {children}
      {withBottomLine && <BottomLine />}
    </span>
  );
};

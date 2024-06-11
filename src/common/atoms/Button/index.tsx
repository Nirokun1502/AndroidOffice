import {Button, IButtonProps} from 'native-base';
import React, {ReactNode} from 'react';

type IAButton = {
  children: ReactNode;
} & IButtonProps;

export const AButton = ({children, ...rest}: IAButton) => {
  return <Button {...rest}>{children}</Button>;
};

import React from 'react';
import { AButton } from '@group4officesupplies/common/atoms/Button';

type ICustomButton = {
  content: string;
  bgColor?: string;
  textColor?: string;
} & any;

export const ButtonSubmit = ({
  bgColor,
  content,
  textColor,
  ...rest
}: ICustomButton) => {
  return (
    <AButton
      _text={{
        color: textColor || '#FFFFFF',
        fontWeight: 600,
        fontSize: '16px',
        fontFamily: 'Averta',
      }}
      borderRadius={'8px'}
      bgColor={bgColor || '#E82629'}
      height={'46px'}
      {...rest}>
      {content}
    </AButton>
  );
};

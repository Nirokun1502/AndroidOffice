import React from 'react';
import { Image, Input, IInputProps } from 'native-base';

type IInputTextProps = {
  placeholder: string;
  leftIcon: any;
} & IInputProps;
export const InputText = ({
  placeholder,
  leftIcon,
  ...others
}: IInputTextProps) => {
  return (
    <Input
      borderRadius="8px"
      InputLeftElement={
        <Image
          ml="17px"
          source={leftIcon}
          height="20px"
          width="19.97px"
          resizeMode="cover"
          alt=""
        />
      }
      borderWidth="1px"
      // borderColor={}
      color="#737B7B"
      fontSize="16px"
      height={'56px'}
      fontFamily="Averta"
      fontWeight={400}
      placeholder={placeholder}
      _focus={{
        bgColor: '#FFF',
        borderColor: 'rgba(145, 158, 171, 0.32)',
      }}
      {...others}
    />
  );
};

import { Text } from 'native-base';
import React from 'react';
import { FieldError } from 'react-hook-form';

type IErrorMessageProps = {
  message: FieldError | string;
} & any;
export const ErrorMessage = ({ message, ...others }: IErrorMessageProps) => {
  return (
    <Text color="#FF0032" {...others}>
      {message}
    </Text>
  );
};

import { ErrorMessage } from '@group4officesupplies/common/components/error-message/ErrorMessage';
import { InputText } from '@group4officesupplies/common/components/input';
import { Box } from 'native-base';
import React from 'react';
import { Controller, FieldError } from 'react-hook-form';

type IInputRegisterProps = {
  placeholder: string;
  name: string;
  control: any;
  errors: FieldError;
  leftIcon: any;
} & any;
export const InputRegister = ({
  placeholder,
  name,
  control,
  errors,
  leftIcon,
  ...others
}: IInputRegisterProps) => {
  return (
    <Box height="75px">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <InputText
            borderColor={errors ? 'basic.5' : 'rgba(145, 158, 171, 0.32)'}
            leftIcon={leftIcon}
            placeholder={placeholder}
            height={'56px'}
            {...others}
            onChangeText={onChange}
          />
        )}
      />
      {errors && (
        <ErrorMessage
          fontSize="12px"
          ml="20px"
          mt="4px"
          message={errors?.message}
          fontWeight={400}
          fontFamily="Averta"
        />
      )}
    </Box>
  );
};

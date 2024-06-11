import { Box, Input, Text, View, VStack } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { Controller, useForm } from 'react-hook-form';
import { IOtpFormValue } from '../inputOTP.interface';
import {
  setNumResendOtp,
  setNumSubmitOtp,
  setOtpFormValue,
} from '../inputOTP.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { otpCodeSchema } from '../inputOTP.schema';
import { AppState, Keyboard, Platform, TouchableOpacity } from 'react-native';
import { ButtonSubmit } from '../../../common/components/button-submit/index';
import { useIsFocused } from '@react-navigation/native';
import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';

const isAndroidOs = Platform.OS === 'android';
export const InputOtpForm = () => {
  const dispatch = useAppDispatch();
  const { isSubmitting } = useAppSelector(state => state.inputOtpCodeReducer);
  const inputRef = useRef();
  const { sendingTime, numSendOtp } = useAppSelector(
    state => state.inputOtpStorageSlice.limitOtpNumberSend,
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        // @ts-ignore
        inputRef.current?.focus();
      }, 350);
    }
  }, [isFocused]);

  useEffect(() => {
    if (isAndroidOs) {
      Keyboard.dismiss();
      const subscription = AppState.addEventListener('blur', () => {
        // @ts-ignore
        inputRef.current?.blur();
      });
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          // @ts-ignore
          inputRef.current?.blur();
        },
      );

      return () => {
        subscription.remove();
        keyboardDidHideListener.remove();
      };
    }
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm<IOtpFormValue>({
    resolver: yupResolver(otpCodeSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: IOtpFormValue) => {
    // @ts-ignore
    inputRef.current?.blur();

    setTimeout(() => {
      dispatch(setOtpFormValue(data));
      dispatch(setNumSubmitOtp(1));
    }, 300);
  };
  const otpValue = watch('otpCode');

  const handleResendOTP = () => {
    dispatch(setNumResendOtp(1));
    // @ts-ignore
    inputRef.current?.blur();
  };

  return (
    <VStack mt="35px" paddingX={'14px'}>
      <Box>
        <Controller
          name="otpCode"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Box
                display={'flex'}
                justifyContent="space-between"
                alignItems={'center'}>
                <Input
                  ref={inputRef}
                  onChangeText={onChange}
                  value={value}
                  maxLength={6}
                  opacity={0}
                  // autoFocus={true}
                  mt={-10}
                  returnKeyType="done"
                  keyboardType="numeric"
                  height={10}
                  width={10}
                  borderWidth="0px"
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  {[1, 2, 3, 4, 5, 6].map((_, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        // @ts-ignore
                        onPress={() => inputRef.current?.focus()}>
                        <View
                          key={index}
                          style={{
                            width: 52,
                            height: 52,
                            margin: 5,
                            backgroundColor: '#ECF7FB',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#216BCD',
                            borderRadius: 4,
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 24,
                              fontWeight: '600',
                              color: '#1A1A1A',
                              height: 52,
                              lineHeight: 52,
                            }}>
                            {value && value?.length > index ? value[index] : ''}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </Box>
            );
          }}
        />
        {/* {errors?.otpCode && (
          <ErrorMessage textAlign="center" message={errors?.otpCode?.message} />
        )} */}
      </Box>
      {/* {isCount ? (
        <Text
          fontWeight={400}
          fontSize="14px"
          mt={'12px'}
          textAlign="right"
          color="rgba(34, 49, 63, 1)">
          Gửi lại mã OTP sau {countDown}
        </Text>
      ) : (
        <Text
          underline
          fontWeight={400}
          fontSize="14px"
          mt={'12px'}
          onPress={handleResendOTP}
          textAlign="right"
          color="rgba(34, 49, 63, 1)">
          Gửi lại mã
        </Text>
      )} */}

      <ButtonSubmit
        mt="68px"
        width="343px"
        margin="auto"
        bgColor={!isDirty || !isValid ? '#F1F1F1' : '#E82629'}
        content="Tiếp tục"
        disabled={!isDirty || !isValid}
        textColor={!isDirty || !isValid ? '#C2C2C2' : '#FFFFFF'}
        onPress={handleSubmit(onSubmit)}
      />
    </VStack>
  );
};

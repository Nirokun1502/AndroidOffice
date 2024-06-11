import { Box, Pressable, Spinner, Stack, Text } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormLogin } from '../interface';
import { InputText } from '@group4officesupplies/common/components/input';
import { ButtonSubmit } from '@group4officesupplies/common/components/button-submit';
import { useAppDispatch } from '@group4officesupplies/common/hooks/useAppDispatch';
import { loginSchema } from '../login.schema';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { setAuthenFormData, setNumberSubmit } from '../login.slice';
import { imageIcon } from '@group4officesupplies/common/constants/imagePath';
import {
  BOTTOM_TAB_HOME,
  OTP_SCREEN,
} from '@group4officesupplies/common/constants/route.constant';
import { setCustomerPhoneNumber } from '@group4officesupplies/auth/otp-input/inputOTP.slice';
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import TabBottom from '@group4officesupplies/common/navigation/TabBottom';

interface IAuthenFormProps {
  isLoading: boolean;
}

export const LoginForm = ({ isLoading }: IAuthenFormProps) => {
  const navigation = useNavigation();
  // const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    // formState: { errors, isDirty, isValid },
    setValue,
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: IFormLogin) => {
    try {
      console.log(data.email + data.password);
      // Gọi API với dữ liệu từ form
      const response = await axios.post('http://10.0.2.2:5454/auth/signin', {
        email: data.email,
        password: data.password,
      });
      const user = response.data;
      if (!!user.jwt) {
        await AsyncStorage.setItem('jwt', user.jwt);
        console.log(await AsyncStorage.getItem('jwt'));
      } else {
        Alert.alert('Đăng nhập thất bại!', 'Vui lòng kiểm tra lại thông tin', [
          { text: 'OK' },
        ]);
      }

      console.log('behind is jwt');
      // console.log( AsyncStorage.getItem('jwt'));

      // if (response.data.trim() == 'No such user!') {
      // } else {
      //   navigation.navigate(TabBottom as never);
      // }
      // Xử lý kết quả trả về từ API
      // console.log(response.data);

      // Điều hướng hoặc thực hiện các hành động khác sau khi gọi API thành công
      // dispatch(setAuthenFormData({ phoneNumber: data.phoneNumber }));
      // dispatch(setCustomerPhoneNumber(data.phoneNumber));
      // dispatch(setNumberSubmit(1));
      // navigation.navigate(OTP_SCREEN as never);

      navigation.navigate(TabBottom as never);
    } catch (error) {
      // Xử lý lỗi từ API

      console.error(error);
    }
  };

  // const onSubmit = (data: IFormLogin) => {
  //   dispatch(
  //     setAuthenFormData({
  //       phoneNumber: data?.phoneNumber,
  //     }),
  //   );
  //   dispatch(setCustomerPhoneNumber(data?.phoneNumber));
  //   dispatch(setNumberSubmit(1));
  //   navigation.navigate(OTP_SCREEN as never);
  // };

  return (
    <Box>
      <Box height="60px" marginBottom={'70px'}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Box marginBottom={'20px'}>
                <InputText
                  autoCapitalize="none"
                  // borderColor={
                  //   errors?.phoneNumber ? '#FF4842' : 'rgba(145, 158, 171, 0.32)'
                  // }
                  placeholder="Nhập email"
                  autoCorrect={false}
                  onChangeText={onChange}
                  value={value}
                  leftIcon={imageIcon.PHONE}
                  InputRightElement={
                    value?.length ? (
                      <Pressable
                        mr="10px"
                        // onPress={() => setValue('phoneNumber', '')}
                      >
                        {/* <AntDesign name="delete" size={16} /> */}
                      </Pressable>
                    ) : (
                      <></>
                    )
                  }
                />
              </Box>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Box>
                <InputText
                  secureTextEntry={true}
                  autoCapitalize="none"
                  // borderColor={
                  //   errors?.phoneNumber ? '#FF4842' : 'rgba(145, 158, 171, 0.32)'
                  // }
                  placeholder="Nhập password"
                  onChangeText={onChange}
                  value={value}
                  leftIcon={imageIcon.PHONE}
                  InputRightElement={
                    value?.length ? (
                      <Pressable
                        mr="10px"
                        // onPress={() => setValue('phoneNumber', '')}
                      >
                        {/* <AntDesign name="delete" size={16} /> */}
                      </Pressable>
                    ) : (
                      <></>
                    )
                  }
                />
              </Box>
            );
          }}
        />
        {/* {errors?.phoneNumber && (
          <Text mt="6px" color="#FF0032" ml="20px">
            {errors?.phoneNumber?.message}
          </Text>
        )} */}
      </Box>
      <ButtonSubmit
        onPress={handleSubmit(onSubmit)}
        marginTop="32px"
        rightIcon={
          isLoading ? <Spinner accessibilityLabel="Loading posts" /> : <></>
        }
        content="Đăng nhập/ Đăng ký"
        bgColor={'#E82629'}
      />
    </Box>
  );
};

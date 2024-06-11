import { Pressable, Text, Spinner, VStack, HStack } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ButtonSubmit } from '@group4officesupplies/common/components/button-submit';
import { ImagePath } from '@group4officesupplies/common/constants/imagePath';
import { IUserFormRegister } from '../register.interface';
import { InputRegister } from './InputRegister';
import { registerSchema } from '../register.schema';
import firestore from '@react-native-firebase/firestore';
import { USER_COLLECTION } from '@group4officesupplies/common/constants/collection.constants';
import { TAB_BOTTOM } from '@group4officesupplies/common/constants/route.constant';

export const RegisterForm = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const [valueCheckBox, setValueCheckBox] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // @ts-ignore
  const uid = router?.params?.uid;

  const saveRegisterInfo = async (data: IUserFormRegister) => {
    try {
      if (!uid) throw new Error('User not valid');
      await firestore().collection(USER_COLLECTION).doc(uid).set({
        name: data?.userName,
        email: data?.email,
      });
      navigation.navigate(TAB_BOTTOM as never);
    } catch (err) {
      console.error(err);
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormRegister>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data: IUserFormRegister) => {
    saveRegisterInfo(data);
  };
  return (
    <VStack space={5} marginTop="20px">
      <InputRegister
        name="userName"
        control={control}
        errors={errors?.userName}
        placeholder="Họ và tên*"
        leftIcon={ImagePath.imgUser}
      />
      <InputRegister
        name="email"
        control={control}
        errors={errors?.email}
        placeholder="Email*"
      />

      <HStack ml={1} alignItems={'center'} space={2} width={'90%'}>
        <Pressable onPress={() => setValueCheckBox(!valueCheckBox)}>
          <Image
            source={
              valueCheckBox ? ImagePath.checkboxSuccess : ImagePath.unCheckbox
            }
          />
        </Pressable>
        <Text fontFamily={'Averta'} fontWeight={400} fontSize={'16px'}>
          Tôi đồng ý với các{' '}
          <Text color={'#E82629'} underline>
            Điều khoản và chính sách của G4S
          </Text>
        </Text>
      </HStack>
      <ButtonSubmit
        bgColor={!valueCheckBox ? '#F1F1F1' : '#E82629'}
        content="Tiếp tục"
        disabled={!valueCheckBox}
        textColor={!valueCheckBox ? '#C2C2C2' : '#FFFFFF'}
        onPress={handleSubmit(onSubmit)}
        rightIcon={
          isLoading ? <Spinner accessibilityLabel="Loading posts" /> : <></>
        }
      />
    </VStack>
  );
};

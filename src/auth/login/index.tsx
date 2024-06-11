import { useNavigation } from '@react-navigation/native';
import { Box, Button, ScrollView, Stack, Text } from 'native-base';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LoginHeader } from './components/LoginHeader';
import { LoginForm } from './components/LoginForm';
import { TAB_BOTTOM } from '@group4officesupplies/common/constants/route.constant';
import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';

const LoginContainerScreen = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate(TAB_BOTTOM as never);
  };

  return (
    <KeyboardAwareScrollView
      // flex={1}
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={{ backgroundColor: '#FFFFFF', flex: 1 }}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{ height: '100%' }}>
          <Stack width={'100%'}>
            <Button
              variant={'ghost'}
              alignSelf={'flex-start'}
              onPress={handleClose}
              _pressed={{ backgroundColor: '#CCCCCC1A' }}
              zIndex={1}
              mt={1}
              position={'absolute'}
              top={0}>
              <AntDesign name="close" size={24} color={'#000'} />
            </Button>
            <Box top={'6%'}>
              <LoginHeader />
            </Box>
            <Box
              width={'100%'}
              height={'100%'}
              pt={'32px'}
              px={'16px'}
              bgColor={'#FFF'}
              mt={'30%'}
              borderTopRadius={'24px'}>
              <Text
                fontFamily={'Averta-Bold'}
                fontSize={'24px'}
                mb={'24px'}
                fontWeight={600}>
                Đăng nhập ngay
              </Text>
              <LoginForm isLoading={false} />
            </Box>
          </Stack>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default LoginContainerScreen;

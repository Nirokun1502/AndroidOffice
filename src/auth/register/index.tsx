import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { RegisterHeader } from './components/RegisterHeader';
import { RegisterForm } from './components/RegisterForm';

const RegisterContainerScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={{
        // flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: insets.top + 10,
        paddingHorizontal: 13,
        paddingBottom: 60,
        height: '100%',
      }}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid>
      <RegisterHeader />
      <RegisterForm />
    </KeyboardAwareScrollView>
  );
};

export default RegisterContainerScreen;

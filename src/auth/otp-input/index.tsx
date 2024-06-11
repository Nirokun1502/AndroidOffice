import { Center, VStack } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EnterOtpHeader from './components/EnterOtpHeader';
import { InputOtpForm } from './components/InputOTPForm';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { USER_COLLECTION } from '@group4officesupplies/common/constants/collection.constants';
import {
  REGISTER_SCREEN,
  TAB_BOTTOM,
} from '@group4officesupplies/common/constants/route.constant';
import { resetOtpState } from './inputOTP.slice';
import { resetFormState } from '../login/login.slice';
import { useAppDispatch } from '@group4officesupplies/common/hooks/useAppDispatch';
import { saveToAsyncStorage } from '@group4officesupplies/common/utils/utils.common';
import { LocalStorageKey } from '@group4officesupplies/common/constants/common.constants';
import { setUserId } from '@group4officesupplies/common/redux/rootConfigSlice';

const OTPContainerScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  // state
  const [confirm, setConfirm] = useState<any>(null);
  const { phoneNumber } = useAppSelector(
    state => state.loginReducer.loginFormData,
  );
  const { otpForm, numSubmitOtp } = useAppSelector(
    state => state.inputOtpCodeReducer,
  );

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log('confirmation:::', confirmation);
      setConfirm(confirmation);
    } catch (err) {
      console.log('Login with phone number error:::', err);
    }
  };

  const confirmCode = async () => {
    try {
      const userCredential = await confirm.confirm(otpForm.otpCode);
      const user = userCredential.user;

      console.log('User credential:::', userCredential);
      console.log('User:::', user);

      // check if user new or existing
      const userDocument = await firestore()
        .collection(USER_COLLECTION)
        .doc(user.uid)
        .get();
      if (userDocument.exists) {
        // if user existing then navigate to bottom bar
        saveToAsyncStorage(LocalStorageKey.USER_ID, user?.uid);
        dispatch(setUserId(user?.uid || ''));
        navigation.reset({
          index: 0,
          routes: [{ name: TAB_BOTTOM }],
        });
      } else {
        // if user new then navigate to register screen
        saveToAsyncStorage(LocalStorageKey.USER_ID, user?.uid);
        // @ts-ignore
        navigation.navigate(REGISTER_SCREEN, { uid: user.uid });
      }
    } catch (err) {
      console.log('Confirm code error:::', err);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(resetOtpState());
      dispatch(resetFormState());
    }, []),
  );

  useEffect(() => {
    if (!numSubmitOtp) return;
    confirmCode();
  }, [otpForm.otpCode, confirm]);

  useEffect(() => {
    if (phoneNumber?.length < 3) navigation.goBack();
    signInWithPhoneNumber();
  }, []);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}>
      <Center>
        <VStack>
          <EnterOtpHeader />
          <InputOtpForm />
        </VStack>
      </Center>
    </SafeAreaView>
  );
};

export default OTPContainerScreen;

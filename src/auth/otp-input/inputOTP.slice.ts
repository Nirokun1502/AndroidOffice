import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IOtpFormValue } from './inputOTP.interface';

const initialState: IInitialState = {
  otpForm: {
    otpCode: '',
  },
  firebaseToken: '',
  numSubmitOtp: 0,
  customerPhoneNumber: '',
  countDown: 60,
  numResendOtp: 0,
  navigateAfterSendOTP: '',
  isSubmitting: false,
  limitOtpNumberSend: {
    sendingTime: 0,
    numOtpSend: 0,
  },
};

const inputOtpSlice = createSlice({
  name: 'input-otp',
  initialState,
  reducers: {
    setOtpFormValue: (state, action: PayloadAction<IOtpFormValue>) => {
      state.otpForm.otpCode = action.payload.otpCode;
    },
    setFirebaseToken: (state, action: PayloadAction<string>) => {
      state.firebaseToken = action.payload;
    },
    setNumSubmitOtp: (state, action: PayloadAction<number>) => {
      state.numSubmitOtp += action.payload;
    },
    setCustomerPhoneNumber: (state, action: PayloadAction<string>) => {
      const phoneNumberTail = action.payload.substring(
        action.payload.length - 3,
      );
      state.customerPhoneNumber = '******' + phoneNumberTail;
    },
    setCountDown: (state, action: PayloadAction<number>) => {
      state.countDown = action.payload;
    },
    setNumResendOtp: (state, action: PayloadAction<number>) => {
      state.numResendOtp += action.payload;
    },
    setNavigateAfterSendOTP: (state, action: PayloadAction<string>) => {
      state.navigateAfterSendOTP = action.payload;
    },
    resetOtpState: state => {
      state.numResendOtp = initialState.numResendOtp;
      state.numSubmitOtp = initialState.numSubmitOtp;
      state.otpForm.otpCode = initialState.otpForm.otpCode;
      state.countDown = initialState.countDown;
    },
    setIsSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
  },
});

export const {
  actions: {
    setCustomerPhoneNumber,
    setOtpFormValue,
    setFirebaseToken,
    setNumSubmitOtp,
    setNumResendOtp,
    setCountDown,
    resetOtpState,
    setNavigateAfterSendOTP,
    setIsSubmitting,
  },
  reducer,
} = inputOtpSlice;

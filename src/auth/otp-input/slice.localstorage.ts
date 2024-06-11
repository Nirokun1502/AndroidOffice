import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  limitOtpNumberSend: {
    sendingTime: 0,
    numSendOtp: 0,
  },
};
export const inputOtpStorageSlice = createSlice({
  name: 'inputOtpStorage',
  initialState,
  reducers: {
    setIsBlockSendOTP: state => {
      state.limitOtpNumberSend.sendingTime = new Date().getHours();
      //   state.limitOtpNumberSend.numSendOtp = action.payload;
    },
    resetNumOtpSend: state => {
      state.limitOtpNumberSend.numSendOtp = 0;
      state.limitOtpNumberSend.sendingTime = 0;
    },
    setNumSendOtp: (state, action: PayloadAction<number>) => {
      state.limitOtpNumberSend.numSendOtp += action.payload;
    },
  },
});
export const {
  actions: { setIsBlockSendOTP, resetNumOtpSend, setNumSendOtp },
  reducer,
} = inputOtpStorageSlice;

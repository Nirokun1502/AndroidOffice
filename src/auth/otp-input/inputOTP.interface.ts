export interface IInitialState {
  otpForm: {
    otpCode: string;
  };
  firebaseToken: string;
  numSubmitOtp: number;
  customerPhoneNumber: string;
  countDown: number;
  numResendOtp: number;
  navigateAfterSendOTP: string;
  isSubmitting: boolean;
  limitOtpNumberSend: {
    sendingTime: number;
    numOtpSend: number;
  };
}
export interface IOtpFormValue {
  otpCode: string;
}

export interface iOtpVerifyParam {
  phoneNumber: string;
  type: string;
  otp: string;
}

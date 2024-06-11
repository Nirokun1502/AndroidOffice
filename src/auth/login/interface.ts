import { RootStackParamList } from '@group4officesupplies/common/navigation/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface ILoginInitialState {
  loginFormData: IFormLogin;
  numSubmit: number;
  isShowPassword: boolean;
  isOpenLockAccountPopUp: boolean;
}
export interface IAuthInitialState {
  accessToken: string;
  isLoggedIn: boolean;
  refreshToken: string;
  limitOtpNumberSend: {
    isBlockSendOTP: boolean;
    sendingTime: string;
  };
}
export interface ILoginRequest {
  phoneNumber: string;
}
export type AuthenFormProps = NativeStackScreenProps<
  RootStackParamList,
  'Auth'
>;
export interface IFormLogin {
  email: string;
  password: string;
}

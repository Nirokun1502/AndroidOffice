import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormLogin, ILoginInitialState } from './interface';

const initialState: ILoginInitialState = {
  loginFormData: {
    phoneNumber: '',
  },
  numSubmit: 0,
  isShowPassword: false,
  isOpenLockAccountPopUp: false,
};

const authenSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setNumberSubmit: (state, action: PayloadAction<number>) => {
      state.numSubmit += action.payload;
    },
    setAuthenFormData: (state, action: PayloadAction<IFormLogin>) => {
      const phoneNumberWithout0 = action.payload.phoneNumber.substring(1);
      state.loginFormData.phoneNumber = `+84${phoneNumberWithout0}`;
    },
    resetFormState: state => {
      state.numSubmit = initialState.numSubmit;
      state.loginFormData = initialState.loginFormData;
    },
    setIsOpenLockAccountPopUp: (state, action: PayloadAction<boolean>) => {
      state.isOpenLockAccountPopUp = action.payload;
    },
  },
});

export const {
  actions: {
    setNumberSubmit,
    setAuthenFormData,
    resetFormState,
    setIsOpenLockAccountPopUp,
  },
  reducer,
} = authenSlice;

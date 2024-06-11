import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  appVersion: string;
  codePushVersion: string | undefined;
  onBoarding: boolean;
  isRegisterFirstDownload: boolean;
  isLoginAfterLogout: boolean;
  deviceTokens: string[];
  userId: string;
}

const initialState: IInitialState = {
  // use this to control ask permission on first time
  appVersion: '',
  codePushVersion: '',
  onBoarding: true,
  isRegisterFirstDownload: false,
  isLoginAfterLogout: false,
  deviceTokens: [],
  userId: '',
};

const rootConfigSlice = createSlice({
  name: 'root-config',
  initialState,
  reducers: {
    setAppVersion: (state, action: PayloadAction<string>) => {
      state.appVersion = action.payload;
    },
    setCodePushVersion: (state, action: PayloadAction<string | undefined>) => {
      state.codePushVersion = action.payload;
    },
    setOnBoarding: (state, action: PayloadAction<boolean>) => {
      state.onBoarding = action.payload;
    },
    setIsRegisterFirstDownload: (state, action: PayloadAction<boolean>) => {
      state.isRegisterFirstDownload = action.payload;
    },
    setIsLoginAfterLogout: (state, action: PayloadAction<boolean>) => {
      state.isLoginAfterLogout = action.payload;
    },
    resetDeviceTokens: state => {
      state.deviceTokens = [];
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});
export const {
  actions: {
    setAppVersion,
    setCodePushVersion,
    setOnBoarding,
    setIsRegisterFirstDownload,
    setIsLoginAfterLogout,
    resetDeviceTokens,
    setUserId,
  },
  reducer,
} = rootConfigSlice;

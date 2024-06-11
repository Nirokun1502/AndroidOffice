import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reducer as rootConfigSliceReducer } from '@group4officesupplies/common/redux/rootConfigSlice';
import { reducer as imagePickerReducer } from '@group4officesupplies/common/components/image-picker/imagePicker.slice';
import { reducer as inputOtpCodeReducer } from '@group4officesupplies/auth/otp-input/inputOTP.slice';
import { reducer as inputOtpStorageSlice } from '@group4officesupplies/auth/otp-input/slice.localstorage';
import { reducer as loginReducer } from '@group4officesupplies/auth/login/login.slice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

const persistConfig = {
  key: 'office-supplies',
  storage: AsyncStorage,
  whitelist: ['rootConfigSliceReducer', 'authReducer', 'ratingReducer'],
};

const rootReducer = combineReducers({
  rootConfigSliceReducer,
  imagePickerReducer,
  inputOtpCodeReducer,
  inputOtpStorageSlice,
  loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };

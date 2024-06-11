import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFileImagePicker, IImagePickerState } from './imagePicker.interface';
import { RootState } from '../../redux/store';

const initialState: IImagePickerState = {
  numSubmit: 0,
  isOpenSelectMethodImagePicker: false,
  imagePicker: {},
};

const imagePickerSlice = createSlice({
  name: 'image-picker',
  initialState,
  reducers: {
    setIsOpenSelectMethodImagePicker: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.isOpenSelectMethodImagePicker = action.payload;
    },
    setNewImage: (state, action: PayloadAction<IFileImagePicker | {}>) => {
      state.imagePicker = action.payload;
    },
    setUserNumSubmit: (state, action: PayloadAction<number>) => {
      state.numSubmit += action.payload;
    },
    resetImagePicker: state => {
      state.imagePicker = {};
      state.numSubmit = 0;
    },
  },
});

export const isOpenSelectMethodImagePickerSelect = (state: RootState) =>
  state.imagePickerReducer.isOpenSelectMethodImagePicker;
export const newImageSelect = (state: RootState) =>
  state.imagePickerReducer.imagePicker;

export const {
  actions: {
    setIsOpenSelectMethodImagePicker,
    setNewImage,
    setUserNumSubmit,
    resetImagePicker,
  },
  reducer,
} = imagePickerSlice;

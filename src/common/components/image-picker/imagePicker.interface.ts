export interface IImagePickerState {
  numSubmit: number;
  isOpenSelectMethodImagePicker: boolean;
  imagePicker: IFileImagePicker | {};
}

export interface IFileImagePicker {
  file: string;
  type: string;
  uri: string;
}

import { Actionsheet, Button, Center } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonOpenPhotoGallery } from './ButtonOpenGallery';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  isOpenSelectMethodImagePickerSelect,
  setIsOpenSelectMethodImagePicker,
} from './imagePicker.slice';

const SelectMethodImagePicker = () => {
  const { t } = useTranslation();

  const isOpenSelectMethodPickerImage = useAppSelector(
    isOpenSelectMethodImagePickerSelect,
  );
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setIsOpenSelectMethodImagePicker(false));
  };
  return (
    <Center>
      <Actionsheet isOpen={isOpenSelectMethodPickerImage} onClose={onClose}>
        <Actionsheet.Content>
          <ButtonOpenPhotoGallery />
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default SelectMethodImagePicker;

import React, { Component } from 'react';
import { Actionsheet, Text } from 'native-base';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  setIsOpenSelectMethodImagePicker,
  setNewImage,
  setUserNumSubmit,
} from './imagePicker.slice';

export const ButtonOpenPhotoGallery = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleOpenPhotoGallery = async () => {
    const result: ImagePickerResponse = await launchImageLibrary({
      mediaType: 'photo',
      includeExtra: true,
    });
    if (result?.assets) {
      dispatch(
        setNewImage({
          fileName: result.assets ? result?.assets[0].fileName : '',
          type: result.assets ? result?.assets[0].type : '',
          uri: result.assets ? result?.assets[0].uri : '',
        }),
      );
      dispatch(setIsOpenSelectMethodImagePicker(false));
      dispatch(setUserNumSubmit(1));
    }
  };
  return (
    <Actionsheet.Item onPress={handleOpenPhotoGallery}>
      <Text color={'#000'} fontSize={'16px'} fontWeight={600}>
        {t('openPhotoGallery')}
      </Text>
    </Actionsheet.Item>
  );
};

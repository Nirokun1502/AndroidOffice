import {
  resetImagePicker,
  setIsOpenSelectMethodImagePicker,
} from '@group4officesupplies/common/components/image-picker/imagePicker.slice';
import SelectMethodImagePicker from '@group4officesupplies/common/components/image-picker/SelectMethodImagePicker';
import { ImagePath } from '@group4officesupplies/common/constants/imagePath';
import { useAppDispatch } from '@group4officesupplies/common/hooks/useAppDispatch';
import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';
import { getBlobFroUri } from '@group4officesupplies/common/utils/utils.common';
import { Avatar, Box, Center, Heading, Stack, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import storage from '@react-native-firebase/storage';
import { updateProfileImage } from '../profile.service';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@group4officesupplies/common/constants/querykeys.constants';

const ProfileHeader = ({
  name,
  phoneNumber,
  image,
}: {
  name: string;
  phoneNumber: string;
  image?: string;
}) => {
  const queryClient = useQueryClient();
  const [isUploadImage, setIsUploadImage] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { imagePicker } = useAppSelector(state => state.imagePickerReducer);
  const { userId } = useAppSelector(state => state.rootConfigSliceReducer);

  const handleSelectImage = () => {
    setIsUploadImage(true);
    dispatch(setIsOpenSelectMethodImagePicker(true));
  };

  const uploadImage = async () => {
    if (!imagePicker?.uri) {
      Alert.alert('No image selected');
      return;
    }
    const imageBlob = await getBlobFroUri(imagePicker.uri);
    console.log('image blob:::', imageBlob);

    const filename = imagePicker.uri.substring(
      imagePicker.uri.lastIndexOf('/') + 1,
    );
    const ref = storage().ref(`images/${new Date()}${filename}`);
    try {
      await ref.put(imageBlob);
      const url = await ref.getDownloadURL();
      return url;
    } catch (e) {
      console.log(e);
      Alert.alert('Upload failed', e.message);
    }
  };

  const handleUpdateAvatar = async () => {
    const urlImage = await uploadImage();
    console.log('URL:', urlImage);
    await updateProfileImage(userId, urlImage);
    setIsUploadImage(false);
    dispatch(resetImagePicker());
    queryClient.invalidateQueries(QUERY_KEYS.USER_PROFILE);
  };

  useEffect(() => {
    if (!imagePicker || !isUploadImage) return;
    handleUpdateAvatar();
  }, [imagePicker]);

  useEffect(() => {
    return () => {
      dispatch(resetImagePicker());
    };
  }, []);
  return (
    <View
      bgColor={'#f8f8f8'}
      width={'100%'}
      position={'relative'}
      minHeight={'300px'}
      height={'300px'}>
      <Box height={'225px'} borderBottomRadius={'36px'} overflow={'hidden'}>
        <ImageBackground
          source={ImagePath.imageBackground}
          alt=""
          resizeMode="cover">
          <Center width={'100%'} height={'225px'}></Center>
        </ImageBackground>
      </Box>

      <Center
        height={'100%'}
        width={'100%'}
        position={'absolute'}
        bottom={'-55px'}>
        <Stack
          alignItems={'center'}
          space={'8px'}
          maxWidth={'247px'}
          borderRadius={'26px'}
          bgColor={'#FFF'}
          width={'247px'}
          // shadow={9}
          style={{
            shadowColor: '#EC3A81',
            shadowOffset: { width: 5, height: 6 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 10,
          }}
          pb={'26px'}>
          <Center
            width={'78px'}
            height={'78px'}
            bgColor={'red.200'}
            mt={'-35px'}
            borderRadius={'50px'}
            borderWidth={'5px'}
            borderColor={'#FFF'}>
            <TouchableOpacity onPress={handleSelectImage}>
              <Avatar
                size={'70px'}
                source={{
                  uri: image
                    ? image
                    : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                avt
                <Avatar.Badge
                  bg="#E1E8FE"
                  size={'25px'}
                  ml={'-10px'}
                  alignItems={'center'}
                  display={'flex'}
                  justifyContent={'center'}>
                  <AntDesign name="camerao" size={16} />
                </Avatar.Badge>
              </Avatar>
            </TouchableOpacity>
          </Center>
          <TouchableOpacity
            onPress={() => {
              //   navigate(USER_PROFILE);
            }}>
            <Center>
              <Heading fontSize={'20px'} fontFamily={'Averta'} isTruncated>
                {name || ''}
              </Heading>
              <Text mt={'5px'} fontSize={'16px'} fontFamily={'Averta'}>
                {phoneNumber || ''}
              </Text>
            </Center>
          </TouchableOpacity>
        </Stack>
      </Center>
      <SelectMethodImagePicker />
    </View>
  );
};

export default ProfileHeader;

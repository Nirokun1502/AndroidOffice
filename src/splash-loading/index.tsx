import { LocalStorageKey } from '@group4officesupplies/common/constants/common.constants';
import { imageLogo } from '@group4officesupplies/common/constants/imagePath';
import {
  LOGIN_SCREEN,
  TAB_BOTTOM,
} from '@group4officesupplies/common/constants/route.constant';
import { useAppDispatch } from '@group4officesupplies/common/hooks/useAppDispatch';
import { setUserId } from '@group4officesupplies/common/redux/rootConfigSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Box, Image, Spinner, Stack, Text } from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashLoading = () => {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const initialRoute = LOGIN_SCREEN;

  const getData = async () => {
    try {
      const userId = await AsyncStorage.getItem(LocalStorageKey.USER_ID);
      if (userId) {
        console.log('user id from local storage', userId);
        dispatch(setUserId(userId));
        // @ts-ignore
        navigator.navigate(TAB_BOTTOM, {});
      } else {
        // @ts-ignore
        navigator.navigate(initialRoute, {});
      }
    } catch (error) {}
  };

  useEffect(() => {
    SplashScreen.hide();
    getData();
  }, []);

  return (
    <Box width={'100%'} height={'100%'}>
      <ImageBackground source={imageLogo.LOGO_SPLASH}>
        <Stack
          width={'100%'}
          height={'100%'}
          alignItems={'center'}
          justifyContent={'flex-end'}>
          {/* <Box width={'130px'} height={'107px'}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={imageLogo.LOGO_SPLASH}
          alt="splash-image"
          resizeMode="cover"
          key={imageLogo.LOGO_SPLASH}
          />
      </Box> */}
          <Spinner size={30} />
          <Box mb={150} />
        </Stack>
      </ImageBackground>
    </Box>
  );
};

export default SplashLoading;

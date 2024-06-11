import { ImagePath } from '@group4officesupplies/common/constants/imagePath';
import { Box, Heading, ScrollView, Stack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from './components/ProfileHeader';
import ProfileTabBottom from './components/ProfileTabBottom';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  LOGIN_SCREEN,
  MY_ORDER,
} from '@group4officesupplies/common/constants/route.constant';
import auth from '@react-native-firebase/auth';
import { useGetProfile } from './hooks/useGetProfile';
import { removeFromAsyncStorage } from '@group4officesupplies/common/utils/utils.common';
import { LocalStorageKey } from '@group4officesupplies/common/constants/common.constants';
import { useAppDispatch } from '@group4officesupplies/common/hooks/useAppDispatch';
import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';
import { setUserId } from '@group4officesupplies/common/redux/rootConfigSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileContainerScreen = () => {
  const navigation = useNavigation();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const getJwt = async () => {
      const jwt = await AsyncStorage.getItem('jwt');
      // if (!jwt) {
      //   navigation.reset({
      //     index: 0,
      //     routes: [{ name: LOGIN_SCREEN }],
      //   });
      // }
    };
    getJwt();
  }, []);

  const fetchdata = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');

      if (!jwt) {
        navigation.reset({
          index: 0,
          routes: [{ name: LOGIN_SCREEN }],
        });
      }
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const results = await axios.get(
        `http://10.0.2.2:5454/api/users/profile`,
        config,
      );

      setUserProfile(results.data);
      console.log(results.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('jwt');
      navigation.reset({
        index: 0,
        routes: [{ name: LOGIN_SCREEN }],
      });
    } catch (err) {
      console.log('Logout errors::::', err);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView height={'100%'} bgColor={'#f8f8f8'}>
        <ProfileHeader
          name={
            userProfile
              ? userProfile.firstName + ' ' + userProfile.lastName
              : ''
          }
          phoneNumber={userProfile?.email || ''}
          image={userProfile?.imageUrl || ''}
        />
        <Stack padding={'16px'} space={'12px'} mb={50}>
          <Box
            borderRadius={'24px'}
            overflow={'hidden'}
            px={'24px'}
            pb={'10px'}
            pt={'10px'}
            bgColor={'#FFF'}>
            <Heading
              fontSize={'18px'}
              fontWeight={'600'}
              mt={'16px'}
              fontFamily={'Averta-Semibold'}>
              Giỏ hàng
            </Heading>
            <ProfileTabBottom
              onPress={() => {
                navigation.navigate(MY_ORDER);
              }}
              isLastChild
              sourceImage={ImagePath.shoppingBag}
              title="Đơn hàng của tôi"
            />
            <ProfileTabBottom
              onPress={() => {}}
              isLastChild
              sourceImage={ImagePath.truck}
              title="Lịch sử đặt hàng"
            />
          </Box>
          <Box
            borderRadius={'24px'}
            overflow={'hidden'}
            px={'24px'}
            pb={'10px'}
            pt={'10px'}
            bgColor={'#FFF'}>
            <Heading
              fontSize={'18px'}
              fontWeight={'600'}
              mt={'16px'}
              fontFamily={'Averta-Semibold'}>
              Cài đặt
            </Heading>
            <ProfileTabBottom
              onPress={() => {
                handleLogout();
              }}
              isLastChild
              sourceImage={ImagePath.logout}
              title="Đăng xuất"
            />
          </Box>
          <Box mb={'50px'} />
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileContainerScreen;

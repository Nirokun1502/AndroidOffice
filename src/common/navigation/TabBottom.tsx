import React from 'react';
import { TouchableOpacity } from 'react-native';
// import component from package
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import component from pages
import { Flex, Text } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  CartStackNavigator,
  MainStackNavigator,
  OrderStackNavigator,
  ProfileStackNavigator,
} from './StackNavigation';
import {
  BOTTOM_TAB_CART,
  BOTTOM_TAB_HOME,
  BOTTOM_TAB_ORDER,
  BOTTOM_TAB_PROFILE,
  BOTTOM_TAB_MANAGER,
} from '../constants/route.constant';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { ICartItem } from '../interface/cart.interface';
import { IUser } from '../interface/user.interface';
import ManagerTabGeneral from '@group4officesupplies/manager';
import HomeScreenContainer from '@group4officesupplies/home';
import CartScreenContainer from '@group4officesupplies/cart';
import OrderScreenContainer from '@group4officesupplies/order';
import ProfileScreenContainer from '@group4officesupplies/profile';
import MyOrderContainer from '@group4officesupplies/profile/my-order';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  const formData = [
    { productID: 'MR2Qbqma9TExxNxr644Z', quantity: 2 },
    { productID: 'dwNota47sb4zMCcGU7Ep', quantity: 5 },
  ];

  const myCartItems: ICartItem[] = formData.map(item => ({
    productID: item.productID,
    quantity: item.quantity,
  }));

  const myUser: IUser = {
    id: 'LsjNM7U2G0OWLGaKtTuziX6MCls1',
    email: 'vinhdev@test.com',
    name: 'vinhdev',
    cart: myCartItems,
  };

  const handleCartTabPress = (user: IUser) => {
    // @ts-ignore
    navigation.navigate(BOTTOM_TAB_CART as never, { userID: user?.id });
    console.log('hello' + user.id);
  };

  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        // headerStyle: {
        //   height: 56,
        //   fontSize: '24px',
        // },
        tabBarStyle: {
          height: 60,
          backgroundColor: 'white',
          fontSize: '24px',
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
        },
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: '#0E3C9E',
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '400',
        },
      })}>
      <Tab.Screen
        name={BOTTOM_TAB_HOME}
        component={HomeScreenContainer}
        options={{
          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => navigation.navigate(BOTTOM_TAB_HOME as never)}>
              <Flex alignItems={'center'} justifyContent={'center'}>
                <MaterialCommunityIcons name="home" size={size} color={color} />
                <Text
                  textAlign={'center'}
                  minWidth={'50px'}
                  color={color}
                  size={size}>
                  {t('home')}
                </Text>
              </Flex>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={BOTTOM_TAB_CART}
        component={CartScreenContainer}
        options={{
          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => handleCartTabPress(myUser)}>
              <Flex alignItems={'center'} justifyContent={'center'}>
                <MaterialCommunityIcons name="cart" size={size} color={color} />
                <Text
                  textAlign={'center'}
                  minWidth={'50px'}
                  color={color}
                  size={size}>
                  {t('cart')}
                </Text>
              </Flex>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={BOTTOM_TAB_ORDER}
        component={MyOrderContainer}
        options={{
          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => navigation.navigate(BOTTOM_TAB_ORDER as never)}>
              <Flex alignItems={'center'} justifyContent={'center'}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={size}
                  color={color}
                />
                <Text
                  textAlign={'center'}
                  minWidth={'50px'}
                  color={color}
                  size={size}>
                  {t('order')}
                </Text>
              </Flex>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={BOTTOM_TAB_PROFILE}
        component={ProfileScreenContainer}
        options={{
          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => navigation.navigate(BOTTOM_TAB_PROFILE as never)}>
              <Flex alignItems={'center'} justifyContent={'center'}>
                <AntDesign name="user" size={size} color={color} />
                <Text
                  textAlign={'center'}
                  minWidth={'50px'}
                  color={color}
                  size={size}>
                  {t('profile')}
                </Text>
              </Flex>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={BOTTOM_TAB_MANAGER}
        component={ManagerTabGeneral}
        options={{
          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => navigation.navigate(BOTTOM_TAB_MANAGER as never)}>
              <Flex alignItems={'center'} justifyContent={'center'}>
                <MaterialCommunityIcons
                  name="account-details-outline"
                  size={size}
                  color={color}
                />
                <Text
                  textAlign={'center'}
                  minWidth={'50px'}
                  color={color}
                  size={size}>
                  {t('manager')}
                </Text>
              </Flex>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabBottom;

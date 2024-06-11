import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartSkeleton from './components/CartSkeleton';
import { useGetCart } from './hooks/useGetCart';
import { useGetDetailProduct } from '@group4officesupplies/detail-product/hooks/useGetDetailProduct';
import { IProduct } from '@group4officesupplies/common/interface/product.interface';
import QuantityControl from './components/QuantityControl';
import { getCartItemByUserID } from '@group4officesupplies/common/services/cart.service';
import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
  BOTTOM_TAB_ORDER,
  ORDER,
} from '@group4officesupplies/common/constants/route.constant';
import { USER_COLLECTION } from '@group4officesupplies/common/constants/collection.constants';
import { db, auth } from 'firebase';
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  deleteField,
  updateDoc,
} from 'firebase/firestore';
import CartItem from './components/CartItem';
import { getProductById } from '@group4officesupplies/firebase/product';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface Item {
  id: string;
  title: string;
  brand: string;
  qty: number;
  image: string;
  price: number;
}

const CartScreenContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [addressData, setAddressData] = useState({});
  const [jwt, setJwt] = useState('');
  const router = useRoute();
  const widthScreen = Dimensions.get('screen').width;
  const { userId } = useAppSelector(state => state.rootConfigSliceReducer);
  const userID = userId.trim().replace(/['"]+/g, '');
  const navigation = useNavigation();

  const handlePayment = async () => {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };

    const addressAPI = await axios.get(
      `http://10.0.2.2:5454/api/users/profile`,
      config,
    );
    // console.log(address.data);
    setAddressData(addressAPI.data);
    console.log(addressData);
    const body = {
      firstName: addressData.firstName,
      lastName: addressData.lastName,
      streetAddress: addressData.address[0].streetAddress,
      city: addressData.address[0].city,
      state: addressData.address[0].state,
      zipCode: addressData.address[0].zipCode,
      mobile: addressData.mobile,
    };
    console.log(body);

    const response = await axios.post(
      `http://10.0.2.2:5454/api/orders/`,
      body,
      config,
    );
    console.log('orderplaced' + response.data + 'order placed');
    navigation.navigate(BOTTOM_TAB_ORDER as never);
  };

  const fetchCartData = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      setJwt(jwt ? jwt : '');

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const response = await axios.get(
        'http://10.0.2.2:5454/api/cart/',
        config,
      );
      setCartItems(response.data.cartItems);

      console.log('hehe' + response.data.cartItems);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useCallback(() => {
    fetchCartData();
  }, []);
  useFocusEffect(
    useCallback(() => {
      fetchCartData();
    }, []),
  );

  return (
    <SafeAreaView>
      <Stack
        height={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Box
          width={widthScreen}
          backgroundColor={'white'}
          position={'absolute'}
          flexDirection={'row'}
          alignItems={'center'}
          zIndex={10}>
          <TouchableOpacity
            style={{ padding: 16 }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back" color={'#000'} size={26} />
          </TouchableOpacity>
          <Text color={'#000'} fontWeight={600} fontSize={'20px'}>
            Giỏ hàng
          </Text>
        </Box>
        {/* End Header */}

        {/* Content */}
        <ScrollView style={{ marginTop: -50, marginBottom: 50 }} zIndex={-10}>
          <Stack padding={'100px'} space={'10px'}>
            {!!cartItems &&
              cartItems?.map((cartItem: any, index: number) => (
                <CartItem
                  jwtStr={jwt}
                  item={cartItem}
                  key={`cartItem#${index}`}
                />
              ))}
            {/* <CartItem /> */}
          </Stack>
        </ScrollView>
        {/* End Content */}

        {/* Footer */}
        <Box
          width={widthScreen}
          backgroundColor={'white'}
          position={'absolute'}
          bottom={0}
          height={150}
          flexDirection={'column'}
          justifyContent={'space-between'}
          paddingRight={16}
          paddingBottom={16}>
          <HStack>{/* <Text color={'#000'}>Nhap voucher:</Text> */}</HStack>
          <HStack
            width={widthScreen}
            alignItems="center"
            justifyContent="Center">
            <HStack
              display={'flex'}
              flexDirection={'column'}
              marginLeft={'30px'}>
              <Text color={'#000'} fontSize={'15px'}>
                Tạm tính:
              </Text>
              <Text color={'#000'} fontSize={'15px'}>
                Giảm giá:
              </Text>
              <Text color={'#000'} fontSize={'17px'} fontWeight={'600'}>
                Tổng:
              </Text>
            </HStack>
            <Button
              marginLeft={'150px'}
              marginTop={'30px'}
              bgColor={'#E82629'}
              _pressed={{
                bgColor: 'rgba(232, 38, 41, 0.5)',
              }}
              height={'50px'}
              width={'140px'}
              borderRadius={'12px'}
              justifyContent={'center'}
              alignItems={'center'}
              onPress={handlePayment}>
              <Text
                color={'#FFF'}
                fontWeight={600}
                fontSize={'18px'}
                lineHeight={'20px'}>
                Thanh toán
              </Text>
            </Button>
          </HStack>
        </Box>

        {/* End Footer */}
      </Stack>
    </SafeAreaView>
  );
};

export default CartScreenContainer;

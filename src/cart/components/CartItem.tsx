import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  View,
} from 'native-base';
import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartItem = ({ item, jwtStr }) => {
  //   const jwt = await AsyncStorage.getItem('jwt');

  const [quantity, setQuantity] = useState(item.quantity);
  const [showCartItem, setShowCartItem] = useState(true);
  //   setQuantity(item.quantity);

  const handleRemoveCartItem = async () => {
    const config = {
      headers: { Authorization: `Bearer ${jwtStr}` },
    };
    const response = await axios.delete(
      `http://10.0.2.2:5454/api/cart_items/${item.id}`,
      config,
    );
    setShowCartItem(false);
    console.log(response.data);
  };

  const handleUpdateCartItem = async (num: number) => {
    setQuantity(quantity + num);
    const data = {
      data: { quantity: quantity + num },
      cartItemId: item?.id,
    };
    const config = {
      headers: { Authorization: `Bearer ${jwtStr}` },
    };
    const response = await axios.put(
      `http://10.0.2.2:5454/api/cart_items/${data.cartItemId}`,
      data.data,
      config,
    );
    console.log(response.data);
  };

  //   const handleRemoveCartItem = () => {
  //     const data = { cartItemId: item?.id };
  //     // dispatch(removeCartItem(data));
  //     // window.location.reload();
  //   };

  // useEffect(() => {}, []);

  return (
    showCartItem && (
      <Stack
        bgColor={'#FFF'}
        padding={'16px'}
        paddingRight={'100px'}
        right={'90px'}
        top={'20px'}
        borderRadius={'8px'}
        borderWidth={'1px'}
        borderColor={'#EEE'}>
        <HStack alignItems={'center'} justifyContent={'space-between'} mt={3}>
          <Box
            width={'100px'}
            height={'100px'}
            bgColor={'#E826291A'}
            marginBottom={'20px'}
            borderRadius={'8px'}>
            <Image
              alt="image product"
              zIndex={999}
              source={{
                uri: item?.product.imageUrl,
              }}
              style={{
                width: '100%',
                aspectRatio: 1, // Dùng aspectRatio để giữ tỉ lệ khung hình
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
          </Box>
          <Stack left={'20px'}>
            <Text fontWeight={'500'} fontSize={'15px'} bottom={'25px'}>
              {item?.product.title}
            </Text>
            <HStack bottom={'20px'}>
              <Text marginRight={'50px'}>Đơn giá: {item?.product.price}</Text>
              <Text>Số lượng: {quantity}</Text>
            </HStack>
            <Text bottom={'10px'} right={'5px'}>
              {/* {` ${
            item?.product.discountPrice
              ? 'Tổng tiền(đã qua giảm giá): ' +
                (item?.product.price - item?.product.discountPrice)
              : 'Tổng tiền: ' + item?.product.price
          } `} */}
            </Text>
            <HStack bottom={'20px'}>
              <Button
                onPress={() => handleUpdateCartItem(-1)}
                backgroundColor={'#ffb0bd'}
                display={'flex'}
                margin={'auto'}>
                <Ionicons name="remove" color={'#000'} size={15} />
              </Button>
              <Text textAlign={'center'} fontSize={'20px'}>
                {quantity}
              </Text>
              <Button
                onPress={() => handleUpdateCartItem(1)}
                backgroundColor={'#ffb0bd'}
                display={'flex'}
                margin={'auto'}>
                <Ionicons name="add" color={'#000'} size={15} />
              </Button>
            </HStack>
            <Button
              onPress={() => handleRemoveCartItem()}
              height={'30px'}
              margin={'0'}
              padding={'0'}
              variant={'link'}
              left={'90px'}
              pr={0}
              _text={{ color: 'rgba(61, 155, 224, 1)', fontSize: '18px' }}>
              Xóa
            </Button>
          </Stack>
        </HStack>
      </Stack>
    )
  );
};

export default CartItem;

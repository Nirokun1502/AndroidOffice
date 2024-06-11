import { Badge, Box, Button, HStack, Image, Stack, Text } from 'native-base';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DETAIL_ORDER } from '@group4officesupplies/common/constants/route.constant';

const MyOrderItem = ({ item, isOrderItem = false }) => {
  const navigation = useNavigation();
  const handleOrderPress = (orderItems: any) => {
    console.log(orderItems);
    // @ts-ignore
    navigation.navigate(DETAIL_ORDER as never, {
      order: orderItems,
    }); // 5:20 fix here
  };

  useEffect(() => {
    console.log(item);
  }, []);

  return isOrderItem ? (
    <Stack
      bgColor={'#FFF'}
      padding={'16px'}
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
              uri: item.product.imageUrl,
            }}
            style={{
              width: '100%',
              aspectRatio: 1, // Dùng aspectRatio để giữ tỉ lệ khung hình
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </Box>
        <Stack>
          <Text fontWeight={'500'} fontSize={'20px'} bottom={'25px'}>
            {item.product.title}
          </Text>
          <HStack bottom={'20px'}>
            <Text marginRight={'50px'}>Đơn giá: {item.product.price}</Text>
            <Text>Số lượng: {item.quantity}</Text>
          </HStack>
          <Text bottom={'10px'} right={'5px'}>{` ${
            item.product.discountPrice
              ? 'Tổng tiền(đã qua giảm giá): ' +
                (item.product.price - item.product.discountPrice)
              : 'Tổng tiền: ' + item.product.price
          } `}</Text>
          <HStack>
            <Text>Trạng thái :</Text>
            <Badge colorScheme="success" borderRadius={'8px'}>
              Đang vận chuyển
            </Badge>
          </HStack>
        </Stack>
      </HStack>
    </Stack>
  ) : (
    <Stack
      bgColor={'#FFF'}
      padding={'16px'}
      borderRadius={'8px'}
      borderWidth={'1px'}
      borderColor={'#EEE'}>
      <Text fontSize={'16px'}>
        Mã đơn hàng:
        <Text color={'#E82629'} fontWeight={600}>
          #2112323
        </Text>
      </Text>
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
              uri: 'https://static-00.iconduck.com/assets.00/cart-shopping-list-icon-1970x2048-awqo7u9m.png',
            }}
            style={{
              width: '100%',
              aspectRatio: 1, // Dùng aspectRatio để giữ tỉ lệ khung hình
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </Box>
        <Stack>
          <Text>
            Giá trị đơn hàng: {item.totalPrice - item.totalDiscountedPrice}
          </Text>
          <Text>Ngày đặt: {item.orderDate}</Text>
          <HStack>
            <Text>Trạng thái :</Text>
            <Badge colorScheme="success" borderRadius={'8px'}>
              Đang vận chuyển
            </Badge>
          </HStack>
          <Button
            onPress={() => handleOrderPress(item)}
            marginTop={'20px'}
            marginLeft={'100px'}
            variant={'link'}
            pr={0}
            _text={{ color: 'rgba(61, 155, 224, 1)', fontSize: '15px' }}>
            Xem tất cả
          </Button>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default MyOrderItem;

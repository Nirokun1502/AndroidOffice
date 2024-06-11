import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailProductSkeleton from '@group4officesupplies/detail-product/components/DetailProductSkeleton';
import MyOrderHeader from '@group4officesupplies/profile/my-order/components/MyOrderHeader';
import MyOrderItem from '@group4officesupplies/profile/my-order/components/MyOrderItem';

const DetailOrderScreen = () => {
  const router = useRoute();
  const widthScreen = Dimensions.get('screen').width;
  const RATIO_BANNER = 343 / 178;
  const [qty, setQty] = useState(1);
  // @ts-ignore
  const order = router?.params?.order;
  const navigation = useNavigation();
  //   const { userId } = useAppSelector(state => state.rootConfigSliceReducer);
  //   const userID = userId.trim().replace(/['"]+/g, '');

  return (
    <SafeAreaView>
      {!order.id || order.id === undefined ? (
        <>
          <DetailProductSkeleton />
        </>
      ) : (
        <>
          <Stack
            height={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <ScrollView>
              <Box width={widthScreen} height={'100px'} position={'relative'}>
                <MyOrderHeader title="Chi tiết đơn hàng" />
              </Box>
              <Stack space={'8px'}>
                <Stack px={'16px'}>
                  <Text color="#212B36" fontSize={'20px'} fontWeight={400}>
                    {'Tên người nhận: ' +
                      order?.user.address[0].firstName +
                      ' ' +
                      order?.user.address[0].lastName}
                  </Text>
                  <Text color="#212B36" fontSize={'20px'} fontWeight={400}>
                    {'Địa chỉ giao hàng: ' +
                      order?.user.address[0].streetAddress +
                      ', ' +
                      order?.user.address[0].city +
                      ', ' +
                      order?.user.address[0].state +
                      '.'}
                  </Text>
                  <Text color={'#212B36'} fontSize={'20px'}>
                    {`Số điện thoại: ${
                      order.user.mobile ? order.user.mobile : ''
                    }`}
                  </Text>
                </Stack>
                <Box
                  width={'100%'}
                  borderWidth={'1px'}
                  borderColor={'#eaeaea'}
                  borderStyle={'dashed'}
                />

                <HStack px={'16px'}>
                  <Text color={'#212B36'} fontSize={'25px'}>
                    Tổng tiền đơn hàng:{' '}
                  </Text>
                  <Text color={'#212B36'} fontSize={'25px'}>
                    {order?.totalPrice - order?.totalDiscountedPrice} VNĐ
                  </Text>
                </HStack>

                <ScrollView>
                  {!!order.orderItems &&
                    order.orderItems.map((orderItem: any, index: any) => (
                      <MyOrderItem
                        key={`orderItems#${index}`}
                        item={orderItem}
                        isOrderItem={true}
                      />
                    ))}
                </ScrollView>
              </Stack>
            </ScrollView>
            <Box width={'100%'} height={'5px'} bgColor={'#eaeaea'} />
          </Stack>
        </>
      )}
    </SafeAreaView>
  );
};

export default DetailOrderScreen;

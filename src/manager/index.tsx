import { Box, Heading, ScrollView, Stack } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ManagerTabBottom from './components/ManagerTabBottom';
import { useNavigation } from '@react-navigation/native';
import {
  MANAGER_ADD_NEW_PRODUCT,
  MANAGER_LIST_PRODUCT,
  STATISTICS,
} from '@group4officesupplies/common/constants/route.constant';

const ManagerTabGeneral = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView height={'100%'} bgColor={'#f8f8f8'} pt={10}>
        <Heading textAlign={'center'}>Quản lý ứng dụng</Heading>
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
              Quản lý sản phẩm
            </Heading>
            <ManagerTabBottom
              onPress={() => {
                navigation.navigate(MANAGER_LIST_PRODUCT as never);
              }}
              sourceImage={''}
              title="Danh sách sản phẩm"
            />
            <ManagerTabBottom
              onPress={() => {
                navigation.navigate(MANAGER_ADD_NEW_PRODUCT as never);
              }}
              isLastChild
              sourceImage={''}
              title="Thêm sản phẩm mới"
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
              Quản lý đơn hàng
            </Heading>
            <ManagerTabBottom
              onPress={() => {}}
              sourceImage={''}
              title="Đơn hàng xét duyệt"
            />
            <ManagerTabBottom
              onPress={() => {}}
              sourceImage={''}
              title="Đơn hàng đóng gói"
            />
            <ManagerTabBottom
              onPress={() => {}}
              isLastChild
              sourceImage={''}
              title="Đơn hàng vận chuyển"
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
              Thống kê
            </Heading>
            <ManagerTabBottom
              onPress={() => {
                navigation.navigate(STATISTICS);
              }}
              sourceImage={''}
              title="Doanh thu"
            />
            <ManagerTabBottom
              onPress={() => {}}
              isLastChild
              sourceImage={''}
              title="Xuất báo cáo"
            />
          </Box>
          <Box mb={'50px'} />
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManagerTabGeneral;

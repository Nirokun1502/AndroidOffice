import React, { useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import { Input, Button, Text, ScrollView, HStack, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
// import DatabaseSP from './DatabaseSP'; // Import your DatabaseSP file

interface Product {
  maSP: string;
  tenSP: string;
  giaSP: string;
}

const DetailProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  // @ts-ignore
  const product = route?.params?.sp;

  const handleUpdate = () => {
    // sp.productName = productName;
    // sp.giaSP = giaSP;
    // dbSanPham.SuaDL(sp);
    ToastAndroid.show('Sửa thành công', ToastAndroid.SHORT);
  };

  const handleDelete = () => {
    // dbSanPham.XoaDL(sp);
    navigation.goBack();
    ToastAndroid.show('Xóa thành công', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Stack space={'20px'} px={'16px'}>
          <Stack space={'20px'}>
            <Input
              color={'#000'}
              placeholder="Mã sản phẩm"
              value={product?.maSP || 0}
              isDisabled
            />
            <Input
              color={'#000'}
              placeholder="Tên sản phẩm"
              value={productName}
              onChangeText={setProductName}
            />
            <Input
              color={'#000'}
              placeholder="Giá sản phẩm"
              value={productPrice}
              onChangeText={setProductPrice}
            />
          </Stack>
          <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
            <HStack space={'20px'}>
              <Button onPress={handleUpdate}>
                <Text>Sửa</Text>
              </Button>
              <Button onPress={handleDelete}>
                <Text>Xóa</Text>
              </Button>
              <Button onPress={() => navigation.goBack()}>
                <Text>Quay lại</Text>
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailProduct;

import React, { useContext, useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProductItem from './ProductItem';
import ProductContext from '@group4officesupplies/features/productContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@group4officesupplies/common/navigation/RootStack';
import { getProducts } from '@group4officesupplies/firebase/product';

interface ProductListScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'ProductList'>;
  navigationOptions?: any; // Nếu cần
}

const ProductListScreen: React.FC<ProductListScreenProps> = ({
  navigation,
  navigationOptions,
}) => {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  const fetchAllProducts = async () => {
    // Đặt biến loading thành true khi bắt đầu gọi dữ liệu
    setLoading(true);
    try {
      // Gọi dữ liệu từ Firebase
      const result = await getProducts();
      // Cập nhật sản phẩm và đặt biến loading thành false khi hoàn thành
      setProducts(result);
      setLoading(false);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  // Effect hook để gọi hàm fetchAllProducts khi màn hình được hiển thị
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 4 }}>
      {loading ? (
        // Hiển thị một indicator nếu đang tải dữ liệu từ Firebase
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {products?.map(
            (product: {
              id: React.Key | null | undefined;
              title: any;
              image: any;
              price: any;
              brand: any;
            }) => (
              <Pressable key={product.id}>
                <ProductItem
                  title={product?.title}
                  image={product?.image}
                  price={product?.price}
                  brand={product?.brand}
                />
              </Pressable>
            ),
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;

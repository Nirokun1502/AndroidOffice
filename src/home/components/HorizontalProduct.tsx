import React, { useEffect, useState } from 'react';
import HeaderSection from './HeaderSection';
import { FlatList, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductItem from './ProductItem';
import PromotionProductItem from './PromotionalProductItem'; // Import PromotionProductItem
import { IProductSection } from '../interface';
import { useGetProducts } from '@group4officesupplies/common/hooks/product/useGetProduct';
import { useGetPromotionProduct } from '@group4officesupplies/common/hooks/product/useGetPromotionProduct';
import { getProductById } from '@group4officesupplies/common/services/product.service';
import { IProduct } from '@group4officesupplies/common/interface/product.interface';
import { DETAIL_PRODUCT } from '@group4officesupplies/common/constants/route.constant';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HorizontalProduct = ({
  dataSection,
}: {
  dataSection: IProductSection;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const navigation = useNavigation();

  const { data: normalProduct } = useGetProducts();
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleProductPress = (item: IProduct) => {
    // @ts-ignore
    navigation.navigate(DETAIL_PRODUCT as never, {
      product: item,
    });
  };

  const fetchdata = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      console.log(jwt, typeof jwt);
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const results = await axios.get(
        `http://10.0.2.2:5454/api/products?color=&minPrice=0&maxPrice=10000000&minDiscount=0&category=all_products&stock=&sort=&pageNumber=0&pageSize=100`,
        config,
      );

      setProducts(results.data.content as IProduct[]);
      console.log(results.data.content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <HeaderSection
        title="Products"
        handleNavigate={() => {
          setShowAllProducts(true);
        }}
      />
      <HStack width={'100%'} overflowY={'auto'} px={3}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            // @ts-ignore
            <TouchableOpacity onPress={() => handleProductPress(item)}>
              <ProductItem
                title={item.title}
                brand={item.brand}
                image={item.imageUrl}
                price={item.price}
              />
            </TouchableOpacity>
          )}
        />
      </HStack>
    </>
  );
};

export default HorizontalProduct;

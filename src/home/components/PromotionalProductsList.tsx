import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem'; // Import ProductItem component
import PromotionProductItem from './PromotionalProductItem';

// Dữ liệu mẫu của sản phẩm khuyến mãi
const promotionalProducts = [
  {
    title: 'Product 1',
    brand: 'Brand A',
    image: 'https://example.com/product1.jpg',
    price: 100,
    salePrice: 80,
  },
  {
    title: 'Product 2',
    brand: 'Brand B',
    image: 'https://example.com/product2.jpg',
    price: 120,
    salePrice: 90,
  },
  // Thêm các sản phẩm khuyến mãi khác ở đây...
];

const PromotionalProductsList = () => {
  return (
    <FlatList
      data={promotionalProducts}
      renderItem={({ item }) => (
        <PromotionProductItem
          title={item.title}
          brand={item.brand}
          image={item.image}
          price={item.price}
          salePrice={item.salePrice}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default PromotionalProductsList;

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

interface PromotionProductItemProps {
  title: string;
  brand: string;
  image: string;
  price: number;
  salePrice: number; // Thêm trường salePrice để hiển thị giá khuyến mãi
}

const PromotionProductItem: React.FC<PromotionProductItemProps> = ({
  title,
  brand,
  image,
  price,
  salePrice,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.brand}>{brand}</Text>
          <Text style={styles.price}>
            Price: <Text style={styles.regularPrice}>${price}</Text>
          </Text>
          <Text style={styles.salePrice}>Sale Price: ${salePrice}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    fontSize: 12,
    marginTop: 2,
  },
  regularPrice: {
    textDecorationLine: 'line-through',
  },
  salePrice: {
    color: 'red', // Màu đỏ cho giá khuyến mãi
    fontWeight: 'bold',
    marginTop: 2,
  },
});

export default PromotionProductItem;

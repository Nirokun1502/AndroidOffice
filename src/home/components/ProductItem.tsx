import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

interface ProductItemProps {
  title: string;
  brand: string;
  image: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  brand,
  image,
  price,
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
          <Text style={styles.price}>Price: ${price}</Text>
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
    marginRight: 20,
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
});

export default ProductItem;

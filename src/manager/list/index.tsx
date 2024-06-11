import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Import useIsFocused
import { getProducts } from '@group4officesupplies/common/services/product.service';
import { deleteProduct } from '../manager.service';
import { IProduct } from '@group4officesupplies/common/interface/product.interface';
import { MANAGER_EDIT_PRODUCT } from '@group4officesupplies/common/constants/route.constant';
import { Box, Button, ScrollView, Text } from 'native-base';
import ManagerHeader from '../components/ManagerHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ManageListProductContainer = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (isFocused) {
      fetchProducts();
    }
  }, [isFocused]);

  const fetchProducts = async () => {
    try {
      const productList = await getProducts();
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleHideProduct = async productId => {
    const product = products.find(item => item.id === productId);
    if (product) {
      try {
        await deleteProduct(productId);
        setProducts(prevProducts =>
          prevProducts.map(item => {
            if (item.id === productId) {
              return { ...item, status: 'inactive' };
            }
            return item;
          }),
        );
        Alert.alert('Success', 'Product hidden successfully');
      } catch (error) {
        console.error('Error hiding product:', error);
        Alert.alert('Error', 'Failed to hide product');
      }
    } else {
      Alert.alert('Error', 'Product not found');
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ManagerHeader title="Danh sách sản phẩm" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {products.map(
            product =>
              product.status === 'active' && (
                <View key={product.id} style={styles.productContainer}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                  />
                  <View style={styles.productInfo}>
                    <Text
                      color={'#000'}
                      fontSize={'16px'}
                      fontWeight={600}
                      isTruncated>
                      {product.title}
                    </Text>
                    <Text>Brand: {product.brand}</Text>
                    <Text isTruncated numberOfLines={2}>
                      Description: {product.description}
                    </Text>
                    <Text>Price: {product.price}</Text>
                  </View>
                  <View style={styles.actionButtons}>
                    <Button
                      variant={'ghost'}
                      startIcon={<AntDesign name="edit" size={20} />}
                      onPress={() => {
                        navigation.navigate(MANAGER_EDIT_PRODUCT, {
                          productId: product.id,
                        });
                      }}
                    />
                    <Button onPress={() => handleHideProduct(product.id)}>
                      Ẩn
                    </Button>
                  </View>
                </View>
              ),
          )}
          <Box mb={50} />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  productInfo: {
    flex: 3,
    marginLeft: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actionButtons: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productImage: {
    width: 100,
    height: 100,
  },
});

export default ManageListProductContainer;

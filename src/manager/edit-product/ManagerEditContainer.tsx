import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getProductById } from '@group4officesupplies/common/services/product.service';
import { IProduct } from '@group4officesupplies/common/interface/product.interface'; // Import IProduct interface
import { editProduct } from '../manager.service';
import ManagerHeader from '../components/ManagerHeader';
import { Box, Image, ScrollView, Stack, TextArea } from 'native-base';

const ManagerEditContainer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // @ts-ignore
  const { productId } = route.params;
  const [product, setProduct] = useState<IProduct | null>(null); // Specify type as IProduct
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    console.log('productId:', productId);
    if (productId) {
      const fetchProduct = async () => {
        try {
          const productData = await getProductById(
            productId.trim().replace(/['"]+/g, ''),
          );
          if (productData) {
            setProduct(productData);
            setTitle(productData.title);
            setBrand(productData.brand);
            setDescription(productData.description);
            setPrice(productData.price.toString());
            setImage(productData.image);
          } else {
            Alert.alert('Error', 'Product not found');
            navigation.goBack();
          }
        } catch (error) {
          console.error('Error fetching product:', error);
          Alert.alert('Error', 'Failed to fetch product');
          navigation.goBack();
        }
      };

      fetchProduct();
    } else {
      Alert.alert('Error', 'Product ID not provided');
      navigation.goBack();
    }
  }, [productId, navigation]);

  const handleSave = async () => {
    try {
      await editProduct(productId, {
        id: '',
        title,
        brand,
        description,
        price: parseFloat(price),
        image,
        status: 'active',
      });
      Alert.alert('Success', 'Product updated successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating product:', error);
      Alert.alert('Error', 'Failed to update product');
    }
  };

  if (!product) {
    return null;
  }

  return (
    <SafeAreaView>
      <Box px={'16px'} mt={10}>
        <ManagerHeader title="Chỉnh sửa sản phẩm" />
      </Box>
      <ScrollView padding={'16px'}>
        <Stack width={'100%'} mb={20} space={5}>
          <TextInput
            style={styles.input}
            placeholder="Tên sản phẩm"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhãn"
            value={brand}
            onChangeText={setBrand}
          />
          <TextArea
            placeholder="Mô tả"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Giá"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          {/* <TextInput
            style={styles.input}
            placeholder="Image URL"
            value={image}
            onChangeText={setImage}
          /> */}
          {image && (
            <Image key={image} source={{ uri: image }} alt="image product" />
          )}
        </Stack>
        <Button title="Save" onPress={handleSave} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default ManagerEditContainer;

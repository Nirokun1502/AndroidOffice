import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { IUploadProduct } from '../manage.interface';
import { uploadProduct } from '../manager.service';
import { useAppDispatch } from '@group4officesupplies/common/hooks/useAppDispatch';
import {
  setIsOpenSelectMethodImagePicker,
  setNewImage,
} from '@group4officesupplies/common/components/image-picker/imagePicker.slice';
import SelectMethodImagePicker from '@group4officesupplies/common/components/image-picker/SelectMethodImagePicker';
import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';
import { useFocusEffect } from '@react-navigation/native';
import ManagerHeader from '../components/ManagerHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, ScrollView, Stack } from 'native-base';
import { BOTTOM_TAB_MANAGER } from '@group4officesupplies/common/constants/route.constant';
import storage from '@react-native-firebase/storage';
import { getBlobFroUri } from '@group4officesupplies/common/utils/utils.common';

const ManagerAddNewProductContainer = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [brand, setBrand] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState('');
  const refImage = storage().ref();
  const { imagePicker } = useAppSelector(state => state.imagePickerReducer);

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const selectImage = () => {
    dispatch(setIsOpenSelectMethodImagePicker(true));
  };

  const uploadImage = async () => {
    if (!imagePicker?.uri) {
      Alert.alert('No image selected');
      return;
    }
    const imageBlob = await getBlobFroUri(imagePicker.uri);
    console.log('image blob:::', imageBlob);

    const filename = imagePicker.uri.substring(
      imagePicker.uri.lastIndexOf('/') + 1,
    );
    const ref = storage().ref(`images/${filename}`);
    try {
      console.log('Uploading');
      await ref.put(imageBlob);
      const url = await ref.getDownloadURL();
      console.log('Uploaded image URL:', url);
      Alert.alert('Photo uploaded!', `URL: ${url}`);
      return url;
    } catch (e) {
      console.log(e);
      Alert.alert('Upload failed', e.message);
    }
  };

  const addProduct = async () => {
    const imagePicker = await uploadImage();
    const newProduct: IUploadProduct = {
      id: generateId(),
      brand,
      title,
      description,
      image: imagePicker || '',
      price: parseFloat(price),
      status: 'active',
    };
    try {
      await uploadProduct(newProduct);
      clearFields();
      Alert.alert('Success', 'Product added successfully');
      navigation.navigate(BOTTOM_TAB_MANAGER as never);
    } catch (error) {
      console.error('Error adding product: ', error);
      Alert.alert('Error', 'Failed to add product');
    }
  };

  const clearFields = () => {
    setBrand('');
    setTitle('');
    setDescription('');
    setPrice('');
    setImageUri('');
    dispatch(setNewImage({}));
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setNewImage({}));
    }, []),
  );

  return (
    <SafeAreaView>
      <Box px={'16px'} mt={10}>
        <ManagerHeader title="Thêm mới sản phẩm" />
      </Box>
      <ScrollView padding={'16px'}>
        <Stack width={'100%'} mb={20} space={5}>
          <TextInput
            placeholder="Nhãn hàng"
            value={brand}
            onChangeText={setBrand}
            style={styles.input}
          />
          <TextInput
            placeholder="Tên sản phẩm"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Mô tả"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
          />
          <TextInput
            placeholder="Giá"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button title="Chọn hình ảnh sản phẩm" onPress={selectImage} />
          <SelectMethodImagePicker />
        </Stack>
        {imagePicker?.uri?.length > 0 && (
          <View style={styles.imageContainer}>
            <Image
              key={imagePicker?.uri}
              source={{ uri: imagePicker?.uri }}
              style={styles.image}
            />
            <TouchableOpacity onPress={clearFields}>
              <AntDesign name="delete" size={30} />
            </TouchableOpacity>
          </View>
        )}
        <Button title="Thêm mới sản phẩm" onPress={addProduct} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default ManagerAddNewProductContainer;

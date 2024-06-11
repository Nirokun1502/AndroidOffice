import React, { useState } from 'react';
import { Button, HStack, Text } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { ICart } from '@group4officesupplies/common/interface/cart.interface';
import { ICartItem } from '@group4officesupplies/common/interface/user.interface';
import { USER_COLLECTION } from '@group4officesupplies/common/constants/collection.constants';

interface QuantityControlProps {
  userID: string;
  productID: string;
  quantity: number;
  // Thêm đối số userID vào props
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  userID,
  productID,
  quantity,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleIncrement = () => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(newQuantity);
  };

  const handleDecrement = () => {
    if (currentQuantity > 0) {
      const newQuantity = currentQuantity - 1;
      updateQuantity(newQuantity);
    }
  };

  const updateQuantity = async (newQuantity: number) => {
    try {
      // Lấy dữ liệu hiện tại của tài liệu
      const userRef = firestore().collection(USER_COLLECTION).doc(userID);
      const userDoc = await userRef.get();
      const userData = userDoc.data();

      // Kiểm tra xem có tồn tại cart không
      if (userData && userData.cart) {
        // Tìm index của sản phẩm trong mảng cart
        const index = userData.cart.findIndex(
          (item: any) => item.productID === productID,
        );
        if (index !== -1) {
          // Cập nhật số lượng sản phẩm trong mảng
          userData.cart[index].quantity = newQuantity;

          // Cập nhật lại toàn bộ mảng cart
          await userRef.update({ cart: userData.cart });

          // Cập nhật state hoặc hiển thị thông báo thành công
          setCurrentQuantity(newQuantity);
        } else {
          console.log('Product not found in cart.');
        }
      } else {
        console.log('Cart not found for this user.');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <HStack space={2} alignItems="center">
      <Button
        size="sm"
        onPress={handleDecrement}
        disabled={currentQuantity === 0}>
        -
      </Button>
      <Text>{currentQuantity}</Text>
      <Button size="sm" onPress={handleIncrement}>
        +
      </Button>
    </HStack>
  );
};

export default QuantityControl;

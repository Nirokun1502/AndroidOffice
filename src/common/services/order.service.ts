import firestore from '@react-native-firebase/firestore';
import { ORDER_COLLECTION } from '../constants/collection.constants';
import { IOrder, IOrderList, IUser } from '../interface/user.interface';

// export const getOrderByUserID = async (
//   userID: string,
// ): Promise<IOrder[] | null> => {
//   try {
//     const docRef = await firestore().collection(ORDER_COLLECTION).doc(userID);
//     const doc = await docRef.get();

//     if (doc.exists) {
//       const ordersData = doc.data() as IOrderList;
//       const orders: IOrder[] = ordersData.orders;

//       return orders;
//     } else {
//       console.log('this user has no orders!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error getting orders by ID: ', error);
//     throw error;
//   }
// };

export const getOrdersByUserID = async (
  userID: string,
): Promise<IOrderList[] | null> => {
  try {
    const querySnapshot = await firestore()
      .collection(ORDER_COLLECTION)
      .where('userID', '==', userID)
      .get();

    const orders: IOrderList[] = [];
    querySnapshot.forEach(doc => {
      const orderData = doc.data() as IOrderList;
      orders.push(orderData);
    });

    return orders.length > 0 ? orders : null;
  } catch (error) {
    console.error('Error getting orders by userID: ', error);
    throw error;
  }
};

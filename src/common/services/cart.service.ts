import firestore from '@react-native-firebase/firestore';
import { USER_COLLECTION } from '../constants/collection.constants';
import { ICartItem, IUser } from '../interface/user.interface';

export const getCartItemByUserID = async (
  userID: string,
): Promise<ICartItem[] | null> => {
  try {
    const docRef = await firestore().collection(USER_COLLECTION).doc(userID);
    const doc = await docRef.get();

    if (doc.exists) {
      const userData = doc.data() as IUser;
      const cartItems: ICartItem[] = userData.cart;

      return cartItems;
    } else {
      console.log('this user has no cart!');
      return null;
    }
  } catch (error) {
    console.error('Error getting product by ID: ', error);
    throw error;
  }
};

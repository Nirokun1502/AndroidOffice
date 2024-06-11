import firestore from '@react-native-firebase/firestore';
import { IUserResponse } from './profile.interface';

export const getProfileUser = async (
  userId: string,
): Promise<IUserResponse | null> => {
  try {
    const docRef = firestore()
      .collection('users')
      .doc(userId.trim().replace(/['"]+/g, ''));
    const doc = await docRef.get();
    if (doc.exists) {
      var result = doc.data() as IUserResponse;
      // result.id = userId;
      return result;
    } else {
      console.log('No such user!');
      return null;
    }
  } catch (error) {
    console.error('Error getting product by ID: ', error);
    throw error;
  }
};

export const updateProfileImage = async (
  userId: string,
  url: string,
): Promise<void> => {
  try {
    await firestore()
      .collection('users')
      .doc(userId.trim().replace(/['"]+/g, ''))
      .set({ image: url }, { merge: true });
    console.log('Update user image successfully');
  } catch (error) {
    console.error('Error update user image: ', error);
    throw error;
  }
};

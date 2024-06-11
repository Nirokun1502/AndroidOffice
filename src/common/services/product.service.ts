// import firestore from '@react-native-firebase/firestore';
// import {
//   PRODUCT_COLLECTION,
//   PRODUCT_PROMOTION_COLLECTION,
// } from '../constants/collection.constants';
// import { IProduct, IProductPromotional } from '../interface/product.interface';

// export const getProducts = async (): Promise<IProduct[]> => {
//   try {
//     const snapshot = await firestore().collection(PRODUCT_COLLECTION).get();
//     // Map over the documents and return the data
//     return snapshot.docs.map(doc => {
//       return {
//         ...doc.data(),
//         id: doc.ref.path
//           .replace(`${PRODUCT_COLLECTION}/`, '')
//           .trim()
//           .replace(/['"]+/g, ''),
//       } as IProduct;
//     });
//   } catch (error) {
//     console.error('Error getting products: ', error);
//     throw error; // Re-throw the error to handle it at the caller level
//   }
// };

// export const getProductById = async (
//   productId: string,
// ): Promise<IProduct | null> => {
//   try {
//     const docRef = firestore()
//       .collection(PRODUCT_COLLECTION)
//       .doc(productId.trim().replace(/['"]+/g, ''));
//     const doc = await docRef.get();

//     if (doc.exists) {
//       var result = doc.data() as IProduct;
//       result.id = productId;
//       return result;
//     } else {
//       console.log('No such product!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error getting product by ID: ', error);
//     throw error;
//   }
// };

// export const getPromotionalProducts = async (): Promise<
//   IProductPromotional[]
// > => {
//   try {
//     const snapshot = await firestore().collection('productsPromotional').get();
//     const products = snapshot.docs.map(doc => {
//       return { id: doc.id, ...doc.data() } as IProductPromotional;
//     });
//     console.log('Promotional Products from Firestore:', products);
//     return products;
//   } catch (error) {
//     console.error('Error getting promotional products: ', error);
//     throw error;
//   }
// };

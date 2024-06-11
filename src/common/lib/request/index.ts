// import axios from 'axios';
// import { toQueryString } from '../common.lib';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-message';
// import { navigate } from '@clvtube/common/utils/common.utils';
// import { AUTH } from '../../constants/route.constants';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
// import {
//   resetStateAuth,
//   setIsLoggedIn,
//   updateAccountWithAuth,
//   updateFirIdToken,
// } from '@clvtube/auth/slice';
// import { store } from '@clvtube/common/redux/store';
// import { LoginAuthAPI } from '../../../auth/api/authAPI';
// import { envData } from '../../constants/envData';

// const axiosClient = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'Application/json',
//   },
//   paramsSerializer: param => toQueryString(param),
//   baseURL: envData.BASE_URL,
// });

// axiosClient.interceptors.request.use(async config => {
//   const tokenValue = await AsyncStorage.getItem('token_App');
//   if (tokenValue) {
//     config.headers.Authorization = `Bearer ${tokenValue}`;
//   }
//   return config;
// });
// axiosClient.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     if (
//       error.response.status === 401 ||
//       error?.response?.data?.debugInfo?.response?.statusCode === 401 ||
//       error.response?.data?.statusCode === 401 ||
//       error.response?.data?.message === 'Please login!!!'
//     ) {
//       const currentUserIdToken = await auth().currentUser?.getIdToken(true);
//       if (currentUserIdToken) {
//         store.dispatch(updateFirIdToken(currentUserIdToken));
//         await AsyncStorage.setItem('token_App', currentUserIdToken);
//         await LoginAuthAPI(currentUserIdToken).then(() => {
//           store.dispatch(setIsLoggedIn(true));
//         });
//         return;
//       }
//       store.dispatch(resetStateAuth());
//       await AsyncStorage.removeItem('token_app');
//       await GoogleSignin.revokeAccess();
//       await auth().signOut();
//       navigate(AUTH);
//     }
//     return Promise.reject(error.response);
//   },
// );

// export { axiosClient };

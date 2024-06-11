// Trong types.ts hoặc types.d.ts

// Import các kiểu cần thiết từ @react-navigation/native
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Định nghĩa kiểu RootStackParamList để đại diện cho tất cả các route trong Stack Navigator
export type RootStackParamList = {
  SplashLoading: {};
  Intro: { navigation: any };
  Auth: {}; // Define Auth route type
  Profile: {};
  TabBottom: {};
  Home: {};
  ExerciseSeven: {};
  ExerciseSix: {};
  ExerciseOne: {};
  ExerciseNine: {};
  Login: undefined;
  Register: undefined;
  OTPScreen: undefined;
  ProductList: {};
  DetailProduct: {};
};

// Định nghĩa kiểu của RouteProp cho màn hình DetailProduct
export type DetailProductRouteProp = RouteProp<
  RootStackParamList,
  'DetailProduct'
>;

// Định nghĩa kiểu của StackNavigationProp cho Stack Navigator
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

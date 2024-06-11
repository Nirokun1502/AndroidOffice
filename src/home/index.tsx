import { ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Banner from './components/Banner';
import { IBannerItem } from './interface';
import {
  bannerSection,
  mockProductSection,
  servicesSection,
} from './mock_data';
import HomeHeader from './components/HomeHeader';
import Service from './components/Service';
import HorizontalProduct from './components/HorizontalProduct';
import ProductListScreen from './components/ProductListScreen';
import { ProductProvider } from '@group4officesupplies/features/productContext';

import { useNavigation } from '@react-navigation/native';

const HomeScreenContainer = () => {
  const initialValue: never[] = [];
  const navigation = useNavigation();
  const navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bgColor={'#FFF'}
        height={'100%'}>
        <VStack space={'20px'} pb={'50px'}>
          <VStack bgColor={'white'}>
            <HomeHeader />
          </VStack>
          <Banner bannerData={bannerSection} />
          <Service data={servicesSection} />
          <HorizontalProduct dataSection={mockProductSection} />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreenContainer;

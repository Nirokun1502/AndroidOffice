import { ScrollView, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../common/components/Header';
import DetailProduct from './components/DetailProduct';

const ExerciseFiveScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Bài tập 5" />
      <ScrollView mt={'20px'}>
        <Text color={'amber.200'}>Bài tập 5</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseFiveScreen;

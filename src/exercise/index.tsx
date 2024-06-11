import {
  EXERCISE_FIVE,
  EXERCISE_NINE,
  EXERCISE_ONE,
  EXERCISE_SEVEN,
  EXERCISE_SIX,
  EXERCISE_THREE,
  STATISTICS,
} from '@group4officesupplies/common/constants/route.constant';
import { useNavigation } from '@react-navigation/native';
import { Button, ScrollView, Stack, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExerciseContainer = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView paddingX={'16px'}>
        <Text color={'black'} fontSize={'2xl'} fontWeight={600}>
          Bài tập trên lớp
        </Text>
        <Stack space={'20px'} mt={'30px'}>
          <Button
            onPress={() => navigation.navigate(EXERCISE_ONE as never)}
            borderRadius={'12px'}
            _text={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
            }}>
            Bài tập 1
          </Button>
          <Button
            onPress={() => navigation.navigate(EXERCISE_THREE as never)}
            borderRadius={'12px'}
            _text={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
            }}>
            Bài tập 3
          </Button>
          <Button
            onPress={() => navigation.navigate(EXERCISE_FIVE as never)}
            borderRadius={'12px'}
            _text={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
            }}>
            Bài tập 5
          </Button>
          <Button
            onPress={() => navigation.navigate(EXERCISE_SEVEN as never)}
            borderRadius={'12px'}
            _text={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
            }}>
            Bài tập 6
          </Button>
          <Button
            onPress={() => navigation.navigate(EXERCISE_SIX as never)}
            borderRadius={'12px'}
            _text={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
            }}>
            Bài tập 7
          </Button>
          <Button
            onPress={() => navigation.navigate(EXERCISE_NINE as never)}
            borderRadius={'12px'}
            _text={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
            }}>
            Bài tập 9
          </Button>
          <Button
            onPress={() => navigation.navigate(STATISTICS as never)}
            borderRadius={'12px'}
            _text={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
            }}>
            Thống kê
          </Button>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseContainer;

import { useNavigation } from '@react-navigation/native';
import { Box, Center, HStack, ScrollView, Skeleton, Stack } from 'native-base';
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailProductSkeleton = () => {
  const widthScreen = Dimensions.get('screen').width;
  const navigation = useNavigation();
  return (
    <Stack
      height={'100%'}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <ScrollView>
        <Box width={widthScreen} height={'250px'} position={'relative'}>
          <TouchableOpacity
            style={{ position: 'absolute', zIndex: 999 }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Box
              bgColor={'#FFFFFF1A'}
              padding={'8px'}
              top={3}
              left={3}
              borderRadius={'100px'}>
              <Ionicons name="arrow-back" color={'#000'} size={26} />
            </Box>
          </TouchableOpacity>
          <Skeleton
            borderRadius={'12px'}
            width={widthScreen}
            height={'250px'}
          />
        </Box>
        <Stack space={'8px'}>
          <Stack padding={'16px'}>
            <Skeleton borderRadius={'12px'} width={'250px'} height={'28px'} />
            <Stack space={'8px'}>
              <Skeleton borderRadius={'12px'} width={'100px'} height={'16px'} />
              <Skeleton borderRadius={'12px'} width={'150px'} height={'16px'} />
              <Skeleton borderRadius={'12px'} width={'200px'} height={'16px'} />
              <Skeleton borderRadius={'12px'} width={'180px'} height={'16px'} />
            </Stack>
          </Stack>
          <Box
            width={'100%'}
            borderWidth={'1px'}
            borderColor={'#eaeaea'}
            borderStyle={'dashed'}
          />
          <HStack
            space={'5px'}
            px={'16px'}
            alignItems={'center'}
            justifyContent={'flex-end'}>
            <Skeleton borderRadius={'12px'} width={'100px'} height={'14px'} />
          </HStack>
          <HStack px={'16px'}>
            <Skeleton borderRadius={'12px'} width={'250px'} height={'28px'} />
          </HStack>
        </Stack>
      </ScrollView>
      <Box width={'100%'} height={'5px'} bgColor={'#eaeaea'} />
      <Center zIndex={999} mb={8} mt={5}>
        <HStack px={'16px'} space={'20px'}>
          <HStack
            space={'8px'}
            alignItems={'center'}
            padding={'0px'}
            borderRadius={'16px'}
            borderColor={'#919EAB'}
            borderWidth={'1px'}>
            <Skeleton borderRadius={'12px'} width={'80px'} height={'16px'} />
          </HStack>
          <Skeleton borderRadius={'12px'} width={'200px'} height={'30px'} />
        </HStack>
      </Center>
    </Stack>
  );
};

export default DetailProductSkeleton;

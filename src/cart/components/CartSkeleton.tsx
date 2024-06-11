import { useNavigation } from '@react-navigation/native';
import { Box, Center, HStack, ScrollView, Skeleton, Stack } from 'native-base';
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartCheckoutSkeleton = () => {
  const widthScreen = Dimensions.get('screen').width;
  const navigation = useNavigation();
  return (
    <Stack
      height={'100%'}
      alignItems={'center'}
      justifyContent={'space-between'}>
      {/* Header */}
      <Box
        width={widthScreen}
        backgroundColor={'white'}
        position={'absolute'}
        top={0}>
        <TouchableOpacity
          style={{ padding: 16 }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="arrow-back" color={'#000'} size={26} />
        </TouchableOpacity>
      </Box>

      {/* Content */}
      <ScrollView style={{ marginTop: 60 }}>
        <Stack padding={'100px'} space={'10px'}>
          {/* Individual Cart Item Skeleton */}
          {[1, 2, 3, 4, 5, 6].map(index => (
            <>
              <Box
                key={index}
                flexDirection="row"
                alignItems="center"
                marginLeft={'-30px'}>
                <Skeleton
                  borderRadius={'12px'}
                  width={'80px'}
                  height={'80px'}
                  marginRight={'12px'}
                />
                <Box>
                  <Skeleton
                    borderRadius={'12px'}
                    width={'150px'}
                    height={'20px'}
                    marginBottom={'8px'}
                  />
                  <Skeleton
                    borderRadius={'12px'}
                    width={'100px'}
                    height={'16px'}
                  />
                  <Skeleton
                    borderRadius={'12px'}
                    width={'80px'}
                    height={'16px'}
                  />
                </Box>
              </Box>
              {/* Separator */}
              <Box
                width={'100%'}
                borderWidth={'1px'}
                borderColor={'#eaeaea'}
                borderStyle={'dashed'}
              />
            </>
          ))}
        </Stack>

        {/* Total Section */}
        <Stack padding={'16px'} space={'8px'}>
          <Skeleton
            borderRadius={'12px'}
            width={'150px'}
            height={'20px'}
            marginBottom={'8px'}
          />
          <Skeleton borderRadius={'12px'} width={'100px'} height={'16px'} />
          <Skeleton borderRadius={'12px'} width={'80px'} height={'16px'} />
        </Stack>
        {/* Checkout Button */}
        <Center zIndex={999} mb={8} mt={5}>
          <HStack px={'16px'} space={'20px'}>
            <Skeleton borderRadius={'12px'} width={'150px'} height={'30px'} />
          </HStack>
        </Center>
      </ScrollView>

      <Box
        width={widthScreen}
        backgroundColor={'white'}
        position={'absolute'}
        bottom={0}
        height={150}></Box>
    </Stack>
  );
};

export default CartCheckoutSkeleton;

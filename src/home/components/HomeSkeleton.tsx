import { Box, HStack, ScrollView, Skeleton, Stack, VStack } from 'native-base';
import React from 'react';
import HeaderContainer from './HomeHeader';
import { Dimensions } from 'react-native';

const HomeSkeleton = () => {
  const width = Dimensions.get('window').width;
  const RATIO_BANNER = 343 / 178;

  return (
    <VStack space={'20px'} pb={'50px'}>
      <VStack bgColor={'white'}>
        <HeaderContainer />
      </VStack>
      <Skeleton width={width} height={width / RATIO_BANNER} />

      <Stack
        px={'16px'}
        mt={'8px'}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}>
        <HStack
          alignItems={'center'}
          justifyContent={'space-evenly'}
          flexWrap={'nowrap'}
          width={'100%'}>
          {Array.from(Array(5), (e, i) => {
            return (
              <Stack
                key={i}
                justifyContent={'center'}
                alignItems={'center'}
                width={'76px'}
                height={'76px'}
                space={4}>
                <Stack
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={'200px'}
                  width={'60px'}
                  height={'60px'}>
                  <Skeleton borderRadius={100} width={'100%'} height={'100%'} />
                </Stack>
                <Skeleton width={'70%'} height={'14px'} borderRadius={'12px'} />
              </Stack>
            );
          })}
        </HStack>
      </Stack>
      <Stack space={'20px'} width={'100%'} mt={'5px'}>
        <HStack
          alignItems={'center'}
          justifyContent={'space-between'}
          px={'16px'}>
          <Skeleton width={'50px'} height={'20px'} borderRadius={4} />
          <Skeleton width={'30px'} height={'16px'} borderRadius={4} />
        </HStack>
        <Stack width={'100%'} space={'12px'}>
          <Box width={'100%'} px={'16px'}>
            <Box
              width={width}
              height={width / RATIO_BANNER}
              overflow={'hidden'}
              borderTopLeftRadius={8}
              borderTopRightRadius={8}>
              <Skeleton width={'100%'} height={'100%'} borderRadius={'8px'} />
            </Box>
          </Box>
          <HStack
            width={'100%'}
            px={'16px'}
            space={'16px'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Stack width={'100%'} space={'12px'}>
              <Skeleton width={'100%'} height={'16px'} />
              <Skeleton width={'100%'} height={'16px'} />
            </Stack>
          </HStack>
          <HStack width={'100%'} overflowY={'auto'} mt={'4px'}>
            <ScrollView horizontal={true}>
              {Array.from(Array(4), (e, i) => {
                return (
                  <Stack maxWidth={'254px'} space={'12px'} key={i}>
                    <Box width={'100%'} px={'16px'}>
                      <Box
                        width={186}
                        height={186 / (16 / 9)}
                        overflow={'hidden'}
                        borderRadius={8}>
                        <Skeleton
                          width={'100%'}
                          height={'100%'}
                          borderRadius={'8px'}
                        />
                      </Box>
                    </Box>
                    <HStack
                      width={'100%'}
                      px={'16px'}
                      space={'16px'}
                      alignItems={'center'}
                      justifyContent={'space-between'}>
                      <Stack width={'85%'} space={2}>
                        <Skeleton
                          width={'100%'}
                          height={'16px'}
                          borderRadius={'12px'}
                        />
                        <Skeleton
                          width={'100%'}
                          height={'14px'}
                          borderRadius={'12px'}
                        />
                      </Stack>
                    </HStack>
                  </Stack>
                );
              })}
            </ScrollView>
          </HStack>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default HomeSkeleton;

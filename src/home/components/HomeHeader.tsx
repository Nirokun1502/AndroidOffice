import React from 'react';

import { HStack, Image, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '@group4officesupplies/common/constants/route.constant';

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <HStack
      px={'16px'}
      pt={'12px'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bgColor={'white'}>
      <HStack alignItems={'center'} space={2}>
        {/* <Image source={imageLogo.LOGO_MINI} width={'32px'} height={'32px'} resizeMode={'contain'} alt={'image'} /> */}
        <Text
          fontSize={'20px'}
          fontWeight={700}
          color={'#084FC7'}
          lineHeight={'42px'}>
          Office
          <Text
            fontSize={'20px'}
            fontWeight={400}
            color={'#216BCD'}
            lineHeight={'42px'}>
            Supplies
          </Text>
        </Text>
      </HStack>
    </HStack>
  );
};

export default HomeHeader;

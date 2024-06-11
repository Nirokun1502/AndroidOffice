import { useNavigation } from '@react-navigation/native';
import { HStack, Text } from 'native-base';
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const widthDevices = Dimensions.get('screen').width;

const Header = ({ title }: { title: string }) => {
  const navigation = useNavigation();
  return (
    <HStack
      width={widthDevices}
      space={'20px'}
      bgColor={'#FFF'}
      px={'16px'}
      alignItems={'center'}
      py={'12px'}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back'} size={20} color={'#000'} />
      </TouchableOpacity>
      <Text
        isTruncated
        fontSize={'18px'}
        fontWeight={600}
        lineHeight={'32px'}
        color={'#000'}>
        {title}
      </Text>
    </HStack>
  );
};

export default Header;

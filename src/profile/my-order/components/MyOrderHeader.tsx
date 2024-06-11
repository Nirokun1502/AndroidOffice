import { ImagePath } from '@group4officesupplies/common/constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { HStack, Text } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyOrderHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={ImagePath.imageBackground}>
      <HStack alignItems={'center'} space={'16px'} px={'16px'} py={'32px'}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <Text color={'#000'} fontSize={'20px'} fontWeight={600}>
          {title ? title : ''}
        </Text>
      </HStack>
    </ImageBackground>
  );
};

export default MyOrderHeader;

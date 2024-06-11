import { Box, Text } from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const RegisterHeader = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <Box>
      <Box padding={'10px'} pt={'20px'}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
      </Box>
      <Text
        mt="32px"
        fontSize={'24px'}
        fontFamily="Averta"
        width={'200px'}
        color="rgba(34, 49, 63, 1)"
        fontWeight={600}>
        Tạo tài khoản
      </Text>
    </Box>
  );
};

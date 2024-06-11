import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Stack, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ManagerHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation();
  return (
    <HStack alignItems={'center'} justifyContent={'space-between'} mb={5}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text fontSize={'26px'} fontWeight={600} lineHeight={'32px'}>
        {title}
      </Text>
      <Box />
    </HStack>
  );
};

export default ManagerHeader;

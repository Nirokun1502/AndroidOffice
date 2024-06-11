import { useAppSelector } from '@group4officesupplies/common/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { Box, Heading, Text } from 'native-base';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EnterOtpHeader = () => {
  const navigation = useNavigation();
  const customerPhoneNumber = useAppSelector(
    state => state.inputOtpCodeReducer.customerPhoneNumber,
  );
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

      <Heading
        marginTop={'20px'}
        fontSize={'24px'}
        color="#22313F"
        fontFamily={'Averta'}
        fontWeight={600}
        paddingLeft={'14px'}>
        Nhập OTP
      </Heading>
      <Text
        fontWeight={400}
        fontSize={'14px'}
        fontFamily="Averta"
        color="#22313F"
        paddingLeft={'14px'}>
        Mã OTP đã được gửi qua số điện thoại {customerPhoneNumber}.
      </Text>
    </Box>
  );
};
export default memo(EnterOtpHeader);

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Sử dụng hook useRoute để lấy route

  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const correctOTP = '';

  // Hàm tạo mã OTP
  const generateOTP = () => {
    const min = 100000; // Số nhỏ nhất có thể gen
    const max = 999999; // Số lớn nhất có thể gen
    const generatedOTP = Math.floor(Math.random() * (max - min + 1)) + min; // Gen số ngẫu nhiên từ min đến max
    console.log('Mã OTP được tạo:', generatedOTP); // Hiển thị mã OTP trong console
    return generatedOTP.toString(); // Chuyển số nguyên sang chuỗi
  };

  // Lưu trữ mã OTP được tạo ra từ trước
  const [generatedOTP, setGeneratedOTP] = useState('');

  // Gọi hàm generateOTP khi màn hình được render và lưu trữ kết quả
  React.useEffect(() => {
    const otp = generateOTP();
    setGeneratedOTP(otp);
  }, []);

  const handleVerifyOTP = () => {
    if (otp === generatedOTP) {
      // Nếu mã OTP nhập vào khớp với mã OTP đã được gen ra từ trước
      // Thực hiện các hành động tiếp theo ở đây, chẳng hạn như chuyển hướng người dùng đến màn hình thành công
      navigation.navigate('Home' as never);
    } else {
      // Nếu mã OTP không khớp
      setError('Mã OTP không chính xác. Vui lòng thử lại.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập mã OTP</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Mã OTP"
        value={otp}
        onChangeText={setOTP}
      />
      <Button title="Xác nhận" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default OTPScreen;

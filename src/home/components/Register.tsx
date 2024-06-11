import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword từ auth module
import { auth } from 'firebase';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const generateOTP = () => {
    const min = 100000; // Số nhỏ nhất có thể gen
    const max = 999999; // Số lớn nhất có thể gen
    const generatedOTP = Math.floor(Math.random() * (max - min + 1)) + min; // Gen số ngẫu nhiên từ min đến max
    return generatedOTP.toString(); // Chuyển số nguyên sang chuỗi
  };

  const handleRegister = async () => {
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp');
      setLoading(false);
      return;
    }

    try {
      // Đăng ký tài khoản
      // Sau khi đăng ký thành công, tạo mã OTP và hiển thị trong console
      const generatedOTP = generateOTP(); // Tạo mã OTP
      console.log('Mã OTP được tạo:', generatedOTP); // Hiển thị mã OTP trong console
      // Chuyển hướng đến màn hình OTP

      navigation.navigate('OTPScreen' as never);
    } catch (error: any) {
      if (error && error.code === 'auth/email-already-in-use') {
        setError(
          'Địa chỉ email đã được sử dụng. Vui lòng chọn địa chỉ email khác.',
        );
      } else {
        // Xử lý các lỗi khác
        const errorMessage = error.message;
        console.error('Lỗi đăng ký:', errorMessage);
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Xác nhận mật khẩu"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Đăng ký" onPress={handleRegister} disabled={loading} />
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

export default Register;

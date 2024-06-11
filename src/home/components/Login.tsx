import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword từ auth module
import { auth } from 'firebase';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError('');

    signInWithEmailAndPassword(auth, email, password) // Sử dụng signInWithEmailAndPassword từ auth module
      .then(userCredential => {
        // Đăng nhập thành công
        const user = userCredential.user;
        console.log('Đăng nhập thành công:', user);
        navigation.navigate('Home' as never);
      })
      .catch(error => {
        // Xử lý lỗi đăng nhập
        const errorMessage = error.message;
        console.error('Lỗi đăng nhập:', errorMessage);
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleRegister = () => {
    navigation.navigate('Register' as never); // Chuyển sang màn hình đăng ký
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
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
      <Button title="Đăng nhập" onPress={handleLogin} disabled={loading} />
      <View style={styles.spacing} />
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
  spacing: {
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50, // Điều chỉnh kích thước của logo tùy theo nhu cầu
    height: 50,
    marginRight: 10,
  },
});

export default Login;

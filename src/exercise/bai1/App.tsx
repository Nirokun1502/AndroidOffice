import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [registeredInfo, setRegisteredInfo] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Kiểm tra xem các ô TextInput có được nhập hay không
    if (!username || !password || !phoneNumber || !email) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    // Hiển thị thông tin đã nhập
    const info = `Thông tin:\nTài khoản: ${username}\nMật khẩu: ${password}\nSố điện thoại: ${phoneNumber}\nEmail: ${email}`;
    setRegisteredInfo(info);
    setError('');
  };

  const handleReset = () => {
    // Reset các ô Input và thông tin đã đăng ký
    setUsername('');
    setPassword('');
    setPhoneNumber('');
    setEmail('');
    setRegisteredInfo('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DemoChieu7</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Bài 1-Nhóm: 4</Text>
      </View>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Tài khoản"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        onChangeText={setPassword}
        secureTextEntry={true}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <View style={styles.buttonRow}>
        <Button title="Đăng ký" onPress={handleRegister} />
        <View style={{ marginHorizontal: 10 }} />
        <Button title="Nhập lại" onPress={handleReset} />
      </View>
      {registeredInfo !== '' && (
        <View
          style={[
            styles.registeredInfoContainer,
            { backgroundColor: 'green' },
          ]}>
          <Text style={styles.registeredInfoText}>{registeredInfo}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Đặt ở giữa
    marginTop: 20,
  },
  registeredInfoContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  registeredInfoText: {
    color: 'white',
  },
  subtitleContainer: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;

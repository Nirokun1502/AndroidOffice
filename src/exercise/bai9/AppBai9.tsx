import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const AppBai9: React.FC = () => {
  const [showChart, setShowChart] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);

  const handleShowChart = () => {
    setShowChart(true);
  };

  const handleLogin = () => {
    // Đoạn này bạn có thể xử lý logic đăng nhập, ví dụ kiểm tra tài khoản và mật khẩu
    if (username === 'admin' && password === 'admin') {
      Alert.alert('Đăng nhập thành công!');
      setSuccess(success + 1);
    } else {
      Alert.alert(
        'Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu.',
      );
      setFail(fail + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DemoSang7</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Bài 9 - Nhóm 4</Text>
      </View>
      <Text style={styles.title}>Đăng nhập</Text>
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
      <View style={styles.buttonRow}>
        <Button title="Đăng nhập" onPress={handleLogin} />
        <Button title="Hiển thị Biểu Đồ" onPress={handleShowChart} />
      </View>
      {showChart && (
        <View style={styles.chartContainer}>
          <PieChart
            style={{ height: 200 }}
            data={[
              {
                key: 1,
                value: success,
                svg: { fill: 'blue' },
                title: 'Success',
              },
              { key: 2, value: fail, svg: { fill: 'red' }, title: 'Fail' },
            ]}
            innerRadius={10}
            outerRadius={100}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitleContainer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  subtitle: {
    color: 'red',
    fontSize: 18,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  chartContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default AppBai9;

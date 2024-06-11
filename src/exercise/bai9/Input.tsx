import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <View style={styles.input}>
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default Input;

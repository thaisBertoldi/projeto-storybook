import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: { borderColor: 'darkgrey', borderWidth: 1, padding: 8, borderRadius: 4 },
});

export const Input = ({ placeholder, borderColor = 'darkgrey' }) => {
  return (
    <TextInput
      style={[styles.input, { borderColor }]}
      placeholder={placeholder}
      underlineColorAndroid={'transparent'}
    />
  );
};
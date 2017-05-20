import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText, secureTextEntry  }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={inputStyle} />
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40
  },
  inputStyle: {
    color: '#000',
    flex: 2,
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    width: 100
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  }
};

export { Input };

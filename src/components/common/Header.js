import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ text }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
};

export { Header };

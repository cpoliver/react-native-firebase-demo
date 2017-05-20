import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => (
    <View style={styles.containerStyle}>
      {children}
    </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1
  }
};

export default Card;

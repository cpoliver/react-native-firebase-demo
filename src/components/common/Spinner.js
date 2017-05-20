import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size = 'large' }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Spinner }

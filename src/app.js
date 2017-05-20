import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import firebaseConfig from '../private/firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header text="Auth" />
        <Text>App</Text>
      </View>
    );
  }
}

export default App;

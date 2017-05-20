import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import firebaseConfig from '../private/firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header text="Auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

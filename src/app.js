import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import firebaseConfig from '../private/firebase';
import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header text="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

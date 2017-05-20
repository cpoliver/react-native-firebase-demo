import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

const initState = {
  email: '',
  password: '',
  error: '',
  loading: false
};

class LoginForm extends Component {
  state = initState;

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
              firebase.auth()
                      .createUserWithEmailAndPassword(email, password)
                      .then(this.onLoginSuccess.bind(this))
                      .catch(this.onLoginFail.bind(this));
            });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed', loading: false })
  }

  onLoginSuccess() {
    this.setState(initState);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            placeholder="user@email.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: '#f00',
    fontSize: 20
  }
}

export default LoginForm;

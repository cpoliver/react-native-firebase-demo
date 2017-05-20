import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() => {
              firebase.auth()
                      .createUserWithEmailAndPassword(email, password)
                      .catch(() => {
                        this.setState({ error: 'Authentication failed' })
                      });
            })
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
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
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

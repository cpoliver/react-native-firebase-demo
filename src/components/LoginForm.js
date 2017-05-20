import React, { Component } from 'react';
import { View } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

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

          <CardSection>
            <Button>
              Log In
            </Button>
          </CardSection>
        </Card>
    );
  }
}

export default LoginForm;

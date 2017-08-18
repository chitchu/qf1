import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Container, Card, Input, Box, Label, Button, Flex } from 'rebass';
import { getCallbackUrl, submitQFF } from '../service';

class App extends Component {
  state = {
    qff: '',
    surname: '',
    pin: '',
    auth: false,
  };
  componentDidMount() {
    getCallbackUrl();
  }

  submitForm = () => {
    submitQFF(this.state.qff, this.state.surname, this.state.pin, response => {
      this.setState(() => ({
        auth: true,
      }));
    });
  };

  setQFFState = value => {
    this.setState(() => ({
      qff: value,
    }));
  };

  setSurnameState = value => {
    this.setState(() => ({
      surname: value,
    }));
  };

  setPINState = value => {
    this.setState(() => ({
      pin: value,
    }));
  };
  render() {
    return (
      <Container p={4}>
        <Card p={3}>
          <Box mb={2}>
            <Label>QFF</Label>
            <Input
              onChange={evt => {
                this.setQFFState(evt.currentTarget.value);
              }}
              value={this.state.qff}
              placeholder="Enter QFF"
            />
          </Box>
          <Box mb={2}>
            <Label>Surname</Label>
            <Input
              onChange={evt => {
                this.setSurnameState(evt.currentTarget.value);
              }}
              value={this.state.surname}
              placeholder="Enter Surname"
            />
          </Box>
          <Box mb={4}>
            <Label>PIN</Label>
            <Input
              onChange={evt => {
                this.setPINState(evt.currentTarget.value);
              }}
              value={this.state.pin}
              placeholder="Enter PIN"
            />
          </Box>
          <Flex justify="flex-end">
            <Box>
              <Button
                disabled={
                  !this.state.pin && !this.state.surname && !this.state.qff
                }
                onClick={this.submitForm}
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </Card>
        {this.state.auth && <Redirect to="/otp" />}
      </Container>
    );
  }
}

export default App;

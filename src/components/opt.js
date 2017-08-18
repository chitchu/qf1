import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Container, Card, Input, Box, Label, Button, Flex } from 'rebass';
import { submitOTP } from '../service/';
class Otp extends Component {
  state = {
    otp: '',
    error: false,
    success: false,
  };
  setOTPstate = value => {
    this.setState(() => ({
      otp: value,
    }));
  };
  submitForm = () => {
    submitOTP(this.state.otp, response => {
      if (response.error && response.error === 'authentication_required') {
        this.setState(() => ({ error: true }));
      } else {
        this.setState(() => ({ success: true }));
      }
    });
  };
  render() {
    return (
      <Container p={4}>
        <Card p={3}>
          <Box mb={2}>
            <Label>
              We've sent a security code in a text message to +61 XXX XXX 078
            </Label>
            {this.state.error &&
              <Label>
                Something went wrong. <Link to="/">Try again?</Link>
              </Label>}
          </Box>
          <Box mb={2}>
            <Input
              value={this.state.otp}
              onChange={evt => {
                this.setOTPstate(evt.currentTarget.value);
              }}
              maxLength="6"
              placeholder="6 digit OTP"
            />
          </Box>
          <Flex justify="flex-end">
            <Box>
              <Button
                onClick={this.submitForm}
                disabled={this.state.otp.length !== 6}
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </Card>
        {this.state.success && <Redirect to="/success" />}
      </Container>
    );
  }
}

export default Otp;

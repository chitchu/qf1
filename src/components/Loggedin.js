import React from 'react';
import { Container, Card, Box, Heading } from 'rebass';
const LoggedIn = () =>
  <Container p={4}>
    <Card p={3}>
      <Box mb={2}>
        <Heading>It worked!</Heading>
      </Box>
    </Card>
  </Container>;

export default LoggedIn;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Otp from './components/opt';
import LoggedIn from './components/Loggedin';

class App extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/otp" component={Otp} />
          <Route exact path="/success" component={LoggedIn} />
        </div>
      </Router>
    );
  }
}
export default App;

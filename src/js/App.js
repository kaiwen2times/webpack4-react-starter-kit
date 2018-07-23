import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='*' component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
render(<App />, document.getElementById("app"));

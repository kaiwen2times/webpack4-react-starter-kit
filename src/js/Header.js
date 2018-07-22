import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header class="navbar navbar-fixed-top navbar-inverse">
        <div class="container">
          <nav>
            <ul class="nav navbar-nav navbar-right">
              <li>Link1</li>
              <li>Link2</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
};
export default Header;


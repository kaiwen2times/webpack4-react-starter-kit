import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <nav>
            <ul className="nav navbar-nav navbar-right">
            <Link to="/">Link1</Link>
            <Link to="*">Link2</Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
};
export default Header;

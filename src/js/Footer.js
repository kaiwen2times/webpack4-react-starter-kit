import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <p className="pull-left">© Generic Company, Inc. All Rights Reserved</p>
          <nav>
            <ul className="pull-right list-inline">
              <li><a href="https://github.com/kaiwen2times/webpack4-react-starter-kit">GitHub Project</a></li>
              <li><a href="https://github.com/kaiwen2times/webpack4-react-starter-kit/issues">Issues</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  }
}
export default Footer;

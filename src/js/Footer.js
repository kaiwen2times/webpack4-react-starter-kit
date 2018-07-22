import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container text-center">
          <p className="pull-left">© Company, Inc. All Rights Reserved</p>
          <ul className="pull-right list-inline">
            <li><a href="https://github.com/kaiwen2times/webpack4-react-starter-kit">GitHub Project</a></li>
            <li><a href="https://github.com/kaiwen2times/webpack4-react-starter-kit/issues">Issues</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer;
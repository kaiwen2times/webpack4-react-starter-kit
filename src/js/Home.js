import React, { Component } from 'react';
import Resume from './Resume';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Resume />
        <Footer />
      </div>
    )
  }
}
export default Home;

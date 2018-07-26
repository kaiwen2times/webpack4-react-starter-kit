import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import data from './../json/contactDetails.json'

class ContactDetailsContainer extends Component {

  render() {
    return (
      <ContactDetails details={data} />
    )
  };
}
export default ContactDetailsContainer;

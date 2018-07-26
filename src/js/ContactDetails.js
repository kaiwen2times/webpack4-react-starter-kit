import React, { Component } from 'react';
import PropTypes from 'prop-types';
import img from './../img/me-profile.png'

class ContactDetails extends Component {
  render() {
    return (
      <div className="mainDetails">
        <div id="headshot" className="quickFade">
          <img src={img} />
        </div>
        
        <div id="name">
          <h1 className="quickFade delayTwo">{this.props.data.name}</h1>
          <h4 className="quickFade delayThree">{this.props.data.occupation}</h4>
        </div>
        
        <div id="contactDetails" className="quickFade delayFour">
          <ul>
            <li><a href={this.props.data.emailAddress} target="_top">{this.props.data.email}</a></li>
            <li><a href={this.props.data.githubAddress}>{this.props.data.github}</a></li>
            <li><a href={this.props.data.linkedinAddress}>{this.props.data.linkedin}</a></li>
            <li><a href={this.props.data.phoneNumber}>{this.props.data.phone}</a></li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}
ContactDetails.propTypes = {
  data: PropTypes.object
}
export default ContactDetails;

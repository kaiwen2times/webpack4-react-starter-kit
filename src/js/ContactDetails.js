import React, { Component } from 'react';
import img from './../img/me-profile.png'

class ContactDetails extends Component {
  render() {
    return (
      <div className="mainDetails">
        <div id="headshot" className="quickFade">
          <img src={img} />
        </div>
        
        <div id="name">
          <h1 className="quickFade delayTwo">{this.props.details.name}</h1>
          <h4 className="quickFade delayThree">{this.props.details.occupation}</h4>
        </div>
        
        <div id="contactDetails" className="quickFade delayFour">
          <ul>
            <li><a href={this.props.details.emailAddress} target="_top">{this.props.details.email}</a></li>
            <li><a href={this.props.details.githubAddress}>{this.props.details.github}</a></li>
            <li><a href={this.props.details.linkedinAddress}>{this.props.details.linkedin}</a></li>
            <li><a href={this.props.details.phoneNumber}>{this.props.details.phone}</a></li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}
export default ContactDetails;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Summary extends Component {
  render() {
    return (
      <section>
        <article>
          <div className="sectionTitle">
            <h1>{this.props.data.title}</h1>
          </div>
          
          <div className="sectionContent">
            <p>{this.props.data.summary}</p>
          </div>
        </article>
        <div className="clear"></div>
      </section>
    )
  }
}
Summary.propTypes = {
  data: PropTypes.object
}
export default Summary;

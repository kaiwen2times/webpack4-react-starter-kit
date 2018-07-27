import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Education extends Component {
  render() {
    return (
      <section>
        <div className="sectionTitle">
          <h1>{this.props.data.title}</h1>
        </div>
        <div className="sectionContent">
          {this.props.data.schools.map((school, index) => (
            <article key={index}>
              <h2>{school.name}</h2>
              <p className="subDetails">{school.year}</p>
              {school.points.map((point, index) => (
                <p key={index} className="schoolDetails">{point}</p>
              ))}
            </article>
          ))}
        </div>
        <div className="clear"></div>
      </section>
    )
  }
}
Education.propTypes = {
  data: PropTypes.object
}
export default Education;

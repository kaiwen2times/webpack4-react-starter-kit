import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Experience extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((experience, index) => (
          <section key={index}>
            <div className="sectionTitle">
              <h1>{experience.title}</h1>
            </div>
            <div className="sectionContent">
              <article>
                <h2>{experience.place}</h2>
                <div className="gridWrapper">
                  {experience.subDetails.map((detail, index) => (
                    <p key={index} className="subDetails">{detail}</p>
                  ))}
                </div>
                <ul className="workList">
                  {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="clear"></div>
          </section>
        ))}
      </div>
    )
  }
}
Experience.propTypes = {
  data: PropTypes.arrayOf(Object)
}
export default Experience;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skills extends Component {
  render() {
    return (
      <section>
        <div className="sectionTitle">
          <h1>{this.props.data.title}</h1>
        </div>
        <div className="sectionContent">
        {this.props.data.skills.map((skill, index) => (
          <div key={index}>
            <h2>{skill.title}</h2>
            <ul className="keySkills">
            {skill.lists.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            </ul>
          </div>
        ))}
        </div>
        <div className="clear"></div>
      </section>
    )
  }
}
Skills.propTypes = {
  data: PropTypes.object
}
export default Skills;

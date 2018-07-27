import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Projects extends Component {
  render() {
    return (
      <section>
        <div className="sectionTitle">
          <h1>{this.props.data.title}</h1>
        </div>
        <div className="sectionContent">
          {this.props.data.projects.map((project, index) =>(
            <article key={index}>
            <h2>
              <a className="subLink" href={project.link}>{project.name}</a>
            </h2>
              <p className="subDetails">{project.subDetails}</p>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <div className="clear"></div>
      </section>
    )
  }
}
Projects.propTypes = {
  data: PropTypes.object
}
export default Projects;

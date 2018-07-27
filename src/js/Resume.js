import React, { Component } from 'react';
// contact details
import ContactDetails from './ContactDetails';
import detailsData from './../json/contactDetails.json'
// summary
import Summary from './Summary';
import summaryData from './../json/summary.json'
// skills
import Skills from './Skills';
import skillsData from './../json/skills.json'
// experience
import Experience from './Experience';
import experienceData from './../json/experience.json'
// projects
import Projects from './Projects';
import projectsData from './../json/projects.json'
// education
import Education from './Education';
import educationData from './../json/education.json'

class Resume extends Component {
  render() {
    return (
      <div id="cv" className="instaFade">
        <ContactDetails data={detailsData} />
        <div id="mainArea" className="quickFade delayFive">
          <Summary data={summaryData} />
          <Skills data={skillsData} />
          <Experience data={experienceData} />
          <Projects data={projectsData} />
          <Education data={educationData} />
        </div>
      </div>
    )
  }
}
export default Resume;

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

class Resume extends Component {
  render() {
    return (
      <div id="cv" className="instaFade">
        <ContactDetails data={detailsData} />
        <div id="mainArea" className="quickFade delayFive">
          <Summary data={summaryData} />
          <Skills data={skillsData} />
          
          <section>
            <div className="sectionTitle">
              <h1>Work Experience</h1>
            </div>
            <div className="sectionContent">
              <article>
                <h2>Constant Contact</h2>
                <div className="gridWrapper">
                  <p className="subDetails">Software Engineer Intern</p>
                  <p className="subDetails">May 2017 - August 2017</p>
                </div>
                <ul className="workList">
                  <li>Contributed to the development of front-end and web services as a member of the "Tesla" scrum team.</li>
                  <li>Created endpoints for donation and payment services in Spring.</li>
                  <li>Used BackboneJS to implement front-end features.</li>
                  <li>Enhanced the functionality of gems used for supporting cucumber testing.</li>
                  <li>Helped to maintain and debug continuous integration pipeline.</li>
                  <li>Upgraded CentOS version on servers.</li>
                  <li>Wrote unit and integration tests.</li>
                </ul>
              </article>
            </div>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionContent">
              <article>
                <h2>Constant Contact</h2>
                <div className="gridWrapper">
                  <p className="subDetails">Software Engineer Intern</p>
                  <p className="subDetails">May 2016 - December 2016</p>
                </div>
                <ul className="workList">
                  <li>Designed, developed, and tested front-end functionality as a member of the "Toolkit" scrum team.</li>
                  <li>Used Spring to create controllers and endpoints for Toolkit web services.</li>
                  <li>Implemented UI functionality using angular and ES5 javascript.</li>
                  <li>Contributed to the enhancement of core modules used to manage iframes.</li>
                  <li>Worked with continuous deployment team to debug issues in the pipeline.</li>
                  <li>Wrote unit and integration tests.</li>
                </ul>
              </article>
            </div>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionContent">
              <article>
                <h2>Eagledream Health</h2>
                <div className="gridWrapper">
                  <p className="subDetails">Full Stack Engineer Intern</p>
                  <p className="subDetails">May 2015 - January 2016</p>
                </div>
                <ul className="workList">
                  <li>Worked in a scrum team. Primarily focuses were front-end development and testing.</li>
                  <li>Involved with scrum ceremonies and production feature development.</li>
                  <li>Wrote queries in Postgres to retrieve data.</li>
                  <li>Implemented Restful endpoints for web services.</li>
                  <li>Developed UI directives in angular.</li>
                  <li>Create font-end markups and styles from UX screenshots.</li>
                  <li>Wrote unit and integration tests.</li>
                </ul>
              </article>
              </div>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionTitle">
              <h1>Projects</h1>
            </div>
            
            <div className="sectionContent">
              <article>
                <h2>Voice</h2>
                <p className="subDetails">React, Node, MongoDB, Webpack, Speech-to-text</p>
                <p>The goal of the project is to develop a real-time speech-to-text service that automates the process of live captioning in classNameroom for hard of hearing students. The tech stack employs react with node express as web services and a mongo database to store notes. Speech-to-text process is done by IBM Watson through its web API. The app enables users to choose a className to tune in and experience live captioning from the browser. Check out progress of the project <a className="subLink" href="http://www.dablr.co">here</a>.</p>
              </article>

              <article>
                <h2>HealthNet</h2>
                <p className="subDetails">Python, Django, Javascript, HTML, CSS, Sqlite3</p>
                <p>Worked with a small team to develop a Django framework web application for hospitals as a className project. The application provided features for managing employees, gathering health related data, signing up patients, making appointments, and allowing transfer of patients between hospitals. Github link <a className="subLink" href="https://github.com/kaiwen2times/healthnet">here</a>.</p>
              </article>
              
              <article>
                <h2>Expense Tracker</h2>
                <p className="subDetails">Angularjs, Javascript, HTML, CSS</p>
                <p>Utilized angular and ES5 javascript to construct a web app capable of authenticating users and interacting with Expensify API to retrieve and update information about expenses. Github link <a className="subLink" href="https://github.com/kaiwen2times/expense-tracker">here</a>.</p>
              </article>

              <article>
                <h2>NXP Cup North America 2016</h2>
                <p className="subDetails">C, Assembly, ARM</p>
                <p>Built and programmed an autonomous model car using a camera and PID algorithm to race around the track provided by NXP. Placed second in NXP Cup East Coast and forth in the North America Finals. Click <a className="subLink" href="https://www.youtube.com/watch?v=6mLF0HtRhHY">here</a> to check out the race.</p>
              </article>

              <article>
                <h2>Trinity College Fire Fighting Robot Contest</h2>
                <p className="subDetails">C, Arduino, Solidworks</p>
                <p>Performed as the project manager and programmer in small team to build a robot that can navigate inside a model house, detect and extinguish candle fire with compressed CO2. Click <a className="subLink" href="https://www.youtube.com/watch?v=08yEyLyxS3c">here</a> to check out the robot in prototype stage.</p>
              </article>

              <article>
                <h2>ASEE National Robotics Competition</h2>
                <p className="subDetails">C, Arduino</p>
                <p>Worked with a small team as the lead programmer to build a robot capable of racing around an oval track and avoid obstacles on the track. Won 3rd place in ASEE National Robotics Competition in 2014.</p>
              </article>
            </div>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionTitle">
              <h1>Education</h1>
            </div>
            
            <div className="sectionContent">
              <article>
                <h2>Rochester Institude of Technology</h2>
                <p className="subDetails">September 2014 - Present</p>
                <p>Bachelors of Science in Computer Engineering.</p>
                <p>3.64 accumulative GPA.</p>
                <p>Expected graduation in December 2017.</p>
              </article>
              
              <article>
                <h2>Monroe Community College</h2>
                <p className="subDetails">September 2012 – May 2014</p>
                <p>Associate degree in Computer Engineering.</p>
                <p>Vice President of Events of Engineering Leadership Council.</p>
              </article>
            </div>
            <div className="clear"></div>
          </section>
        </div>
      </div>
    )
  }
}
export default Resume;

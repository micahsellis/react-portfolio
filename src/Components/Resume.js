import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row skillz">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="skill">
              <ul className="skills">
                <li><i className="devicon-react-original-wordmark"></i></li>
                <li><i className="devicon-babel-plain"></i></li>
                <li><i className="devicon-javascript-plain"></i></li>
                <li><i className="devicon-html5-plain-wordmark"></i></li>
                <li><i className="devicon-css3-plain-wordmark"></i></li>
                <li><i className="devicon-nodejs-plain-wordmark"></i></li>
                <li><i className="devicon-mongodb-plain-wordmark"></i></li>
                <li><i className="devicon-express-original-wordmark"></i></li>
                <li><i className="devicon-bootstrap-plain-wordmark"></i></li>
                <li><i className="devicon-django-plain"></i></li>
                <li><i className="devicon-python-plain-wordmark"></i></li>
                <li><i className="devicon-postgresql-plain-wordmark"></i></li>
                <li><i className="devicon-amazonwebservices-plain-wordmark"></i></li>
                <li><i className="devicon-google-plain"></i></li>
                <li><i className="devicon-git-plain-wordmark"></i></li>
                <li><i className="devicon-github-plain-wordmark"></i></li>
                <li><i className="devicon-heroku-plain-wordmark"></i></li>
                <li><i className="devicon-jquery-plain-wordmark"></i></li>
                <li><i className="devicon-sass-original"></i></li>
                <li><i className="devicon-trello-plain-wordmark"></i></li>
                <li><i className="devicon-npm-original-wordmark"></i></li>
					</ul>
				</div>
			</div>
        </div>
        
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
        </div>
        
   </section>
    );
  }
}

export default Resume;

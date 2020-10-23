import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
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


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="skill">
              <ul className="skills">
                <li><i class="devicon-react-original-wordmark"></i></li>
                <li><i class="devicon-babel-plain"></i></li>
                <li><i class="devicon-javascript-plain"></i></li>
                <li><i class="devicon-html5-plain-wordmark"></i></li>
                <li><i class="devicon-css3-plain-wordmark"></i></li>
                <li><i class="devicon-nodejs-plain-wordmark"></i></li>
                <li><i class="devicon-mongodb-plain-wordmark"></i></li>
                <li><i class="devicon-express-original-wordmark"></i></li>
                <li><i class="devicon-bootstrap-plain-wordmark"></i></li>
                <li><i class="devicon-django-plain"></i></li>
                <li><i class="devicon-python-plain-wordmark"></i></li>
                <li><i class="devicon-postgresql-plain-wordmark"></i></li>
                <li><i class="devicon-amazonwebservices-plain-wordmark"></i></li>
                <li><i class="devicon-google-plain"></i></li>
                <li><i class="devicon-git-plain-wordmark"></i></li>
                <li><i class="devicon-github-plain-wordmark"></i></li>
                <li><i class="devicon-heroku-plain-wordmark"></i></li>
                <li><i class="devicon-jquery-plain-wordmark"></i></li>
                <li><i class="devicon-sass-original"></i></li>
                <li><i class="devicon-trello-plain-wordmark"></i></li>
                <li><i class="devicon-npm-original-wordmark"></i></li>
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;

import React, { Component } from 'react';
// import ReactGA from 'react-ga';
// import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData() {
    this.setState({
      resumeData:
      {
        "main": {
          "name": "Micah Ellis",
          "occupation": "Full-Stack Software Developer",
          "description": "novice photographer, early adopter, and team leader",
          "image": "ME.jpg",
          "bio": "My passion for emerging technologies pushes me to continually learn new things. My photography background gives me the ability to analyze problems from different perspectives and makes me somewhat of a perfectionist. Years of experience in being a retail manager have taught me that I am able to lead a team, manage expenses, and provide exceptional customer service simultaneously. My experiences have netted me the tools needed to lead a team while continually adapting to complex situations and new technologies.",
          "contactmessage": "Get in touch with me!",
          "email": "micahsellis@gmail.com",
          "phone": "404.834.1227",
          "address": {
            "city": "Denver",
            "state": "CO"
          },
          "website": "http://www.micahellis.dev",
          "resumedownload": "/pdf/micah_ellis_resume.pdf",
          "social": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/micahsellis/",
              "className": "fa fa-linkedin"
            },
            {
              "name": "github",
              "url": "http://github.com/micahsellis",
              "className": "fa fa-github"
            }
          ]
        },
        "resume": {
          "education": [
            {
              "school": "Colorado State University Global",
              "degree": "BA Computer Science",
              "graduated": "Expected graduation date: 2023",
              "description": "3.0 GPA"
            },
            {
              "school": "Auburn University of Montgomery",
              "degree": "Information Sciences",
              "graduated": "2004-2006",
              "description": "Completed 48 credits towards BA"
            },
            {
              "school": "Brewbaker Technology Magnet High School",
              "degree": "Infromation Technology",
              "graduated": "2004",
              "description": "A rigorous and innovative learning environment requiring students to develop the skills to be focused and think critically with an emphasis on time management and organization. The use of technology in all classes amplifies the math/logic-based problem solving of the student to prepare them to succeed in college, career, and beyond."
            }
          ],
          "work": [
            {
              "company": "General Assembly Immersive Program",
              "title": "Software Engineering Immersive",
              "years": "July 2020 - October 2020",
              "description": "Three-month, 500-hour full-time and full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies."
            },
            {
              "company": "Goodwill Industries",
              "title": "Store Manager",
              "years": "October 2013 - July 2020",
              "description": "Built and deployed employee scheduling template using Excel based on payroll dollars to all locations. Won 7 Platinum Performer awards for revenue and contribution growth."
            },
            {
              "company": "Target Corporation",
              "title": "Executive Team Lead",
              "years": "September 2004 - October 2013",
              "description": "Strategically reduced store expenditures by lowering the cost of supplies and lowering on the job injuries. Achieved record sales at various locations for multiple months throughout career."
            }
          ]
        },
        "portfolio": {
          "projects": [
            {
              "title": "Get Hired",
              "category": "An app to help track your job search progress (ReactJS, MongoDB, NodeJS, ExpressJS, BootStrap)",
              "image": "pic01.png",
              "url": "https://get-hired-now.herokuapp.com",
              "giturl": "https://github.com/micahsellis/Get-Hired"
            },
            {
              "title": "Line Guide",
              "category": "Save time by checking how long the wait is to get in anywhere (Django, Python, YelpAPI, PostgreSQL, AmazonWebServices, Materialize)",
              "image": "pic02.png",
              "url": "https://lineguide.herokuapp.com",
              "giturl": "https://github.com/micahsellis/lineguide"
            },
            {
              "title": "Drink Machine",
              "category": "Find new cocktail recipes or submit your own! (MongoDB, NodeJS, ExpressJS, Materialize, Google OAuth)",
              "image": "pic03.png",
              "url": "https://drinks-machine.herokuapp.com",
              "giturl": "https://github.com/micahsellis/Drink-Machine"
            },
            {
              "title": "Mongoose Flights",
              "category": "A flight tracker built on the mongoose platform (Mongoose, MongoDB, NodeJS, ExpressJS, CSS3)",
              "image": "pic04.png",
              "url": "https://mongooseflights.herokuapp.com",
              "giturl": "https://github.com/micahsellis/mongoose-flights"
            },
            {
              "title": "CyberPunk Connect4",
              "category": "An updated UI to the classic Connect 4 Game (HTML, CSS, JavaScript)",
              "image": "pic05.png",
              "url": "https://micahsellis.github.io/Connect4/",
              "giturl": "https://github.com/micahsellis/Connect4"
            }
          ]
        },
        "testimonials": {
          "testimonials": [
            {
              "text": "Seriously the best and most amazing person in this cohort, always willing to go out of his way to help everyone",
              "user": "Stephanie Rinehart"
            },
            {
              "text": "That Micah Ellis must be one of the most brilliant developers I've ever met! I'm certain one day we'll work at Google together. It is astonishing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of a bootcamp program and have zero on the job developer experience but I am confident he will be a top dev in no time!",
              "user": "Doug Leinen"
            },
            {
              "text": "Micah always rejuvenated classmates with fresh backgrounds AND great coding skills",
              "user": "Stephen Yi"
            }
          ]
        }
      }
    });

  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Resume data={this.state.resumeData.resume} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;

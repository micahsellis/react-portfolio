import React, { Component } from 'react';

class Portfolio extends Component {

  NewTab(URL) { 
    window.open( 
      URL, "_blank"); 
  }


  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                </div>
              </div>
            </div>
            <div className="project-links">
            <a className="project-link" target="_blanK" rel="noopener noreferrer" href={projects.giturl}><div className="git-icon"><i className="devicon-github-plain"></i> GitHub</div></a>
            <a className="project-link" target="_blanK" rel="noopener noreferrer" href={projects.url} title={projects.title}><div className="link-icon">Launch   Site <i className="fa fa-external-link-square"></i></div></a>
            </div>
          </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work</h1>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;

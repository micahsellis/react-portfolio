(this.webpackJsonpmicah_ellis=this.webpackJsonpmicah_ellis||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),o=(t(13),t(1)),c=t(2),s=t(4),m=t(3),u=(t(14),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,r=this.props.data.networks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline anim-typewriter line-1"},"Hello World \xa0"),l.a.createElement("h1",{className:"responsive-headline name"},"I'm ",e,"."),l.a.createElement("h3",null,"I'm a ",n," based ",t," turned ",l.a.createElement("span",null,a),"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},r))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),d=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.networks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 Micah Ellis"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data){console.log(this.props.data);var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.city,r=this.props.data.address.state,i=this.props.data.address.zip,o=this.props.data.phone,c=this.props.data.email,s=this.props.data.networks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),m=this.props.data.resumedownload}return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Micah Ellis Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns"},l.a.createElement("h2",null,"My Top Programing Languages"),l.a.createElement("p",null,"Python \xa0 Django \xa0 JavaScript \xa0 ReactJS \xa0 NodeJS \xa0 Materialize \xa0 Bootstrap \xa0 HTML(ES6) \xa0 CSS"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n," ",r,", ",i),l.a.createElement("br",null),l.a.createElement("span",null,o),l.a.createElement("br",null),l.a.createElement("span",null,c))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:m,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")),l.a.createElement("ul",{className:"social"},s))))))}}]),t}(n.Component),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),a=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},a)),l.a.createElement("div",{className:"row skillz"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"skill"},l.a.createElement("ul",{className:"skills"},l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-react-original-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-babel-plain"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-javascript-plain"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-html5-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-css3-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-nodejs-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-mongodb-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-express-original-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-bootstrap-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-django-plain"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-python-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-postgresql-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-amazonwebservices-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-google-plain"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-git-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-github-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-heroku-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-jquery-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-sass-original"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-trello-plain-wordmark"})),l.a.createElement("li",null,l.a.createElement("i",{className:"devicon-npm-original-wordmark"})))))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e)))))}}]),t}(n.Component),E=t(5),g=function(e){var a=e.data,t=Object(n.useState)(""),r=Object(E.a)(t,2),i=r[0],o=r[1],c=Object(n.useState)(""),s=Object(E.a)(c,2),m=s[0],u=s[1],d=Object(n.useState)(""),p=Object(E.a)(d,2),h=p[0],g=p[1];return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},null===a||void 0===a?void 0:a.message))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:i,type:"text",size:"35",id:"contactName",name:"contactName",onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{value:m,type:"text",size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return u(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{value:h,onChange:function(e){return g(e.target.value)},cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),window.open("mailto:micahsellis@gmail.com?subject=".concat(m,"&body=").concat(i,": ").concat(h))},className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error! Please email micahsellis@gmail.com with the error details!"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Location and Phone"),l.a.createElement("p",{className:"address"},null===a||void 0===a?void 0:a.name,l.a.createElement("br",null),null===a||void 0===a?void 0:a.address.city,", ",null===a||void 0===a?void 0:a.address.state," ",null===a||void 0===a?void 0:a.address.zip,l.a.createElement("br",null),l.a.createElement("span",null,null===a||void 0===a?void 0:a.phone))),l.a.createElement("div",{className:"widget widget_tweets"}))))},v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))}));return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),t}(n.Component),f=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"NewTab",value:function(e){window.open(e,"_blank")}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category)))),l.a.createElement("div",{className:"project-links"},l.a.createElement("a",{className:"project-link",target:"_blanK",rel:"noopener noreferrer",href:e.giturl},l.a.createElement("div",{className:"git-icon"},l.a.createElement("i",{className:"devicon-github-plain"})," GitHub")),l.a.createElement("a",{className:"project-link",target:"_blanK",rel:"noopener noreferrer",href:e.url,title:e.title},l.a.createElement("div",{className:"link-icon"},"Launch   Site ",l.a.createElement("i",{className:"fa fa-external-link-square"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Work!",l.a.createElement("br",null),l.a.createElement("span",null,"Due to hosting restrictions it may take up to 30 seconds before some of these pages render",l.a.createElement("br",null)),"please give them time to load "),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf"},e))))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},n}return Object(c.a)(t,[{key:"getResumeData",value:function(){this.setState({resumeData:{main:{name:"Micah Ellis",occupation:"Full-Stack Software Developer",description:"novice photographer, early adopter, and team leader",image:"ME.jpg",bio:"My passion for emerging technologies pushes me to continually learn new things. My photography background gives me the ability to analyze problems from different perspectives and makes me somewhat of a perfectionist. Years of experience in being a retail manager have taught me that I am able to lead a team, manage expenses, and provide exceptional customer service simultaneously. My experiences have netted me the tools needed to lead a team while continually adapting to complex situations and new technologies.",contactmessage:"Get in touch with me!",email:"micahsellis@gmail.com",phone:"404.834.1227",address:{city:"Denver",state:"CO"},website:"http://www.micahellis.dev",resumedownload:"/pdf/micah_ellis_resume.pdf",networks:[{name:"linkedin",url:"https://www.linkedin.com/in/micahsellis/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/micahsellis",className:"fa fa-github"}]},resume:{education:[{school:"Colorado State University Global",degree:"BA Computer Science",graduated:"Expected graduation date: 2023",description:"3.0 GPA"},{school:"Auburn University of Montgomery",degree:"Information Sciences",graduated:"2004-2006",description:"Completed 48 credits towards BA"},{school:"Brewbaker Technology Magnet High School",degree:"Infromation Technology",graduated:"2004",description:"A rigorous and innovative learning environment requiring students to develop the skills to be focused and think critically with an emphasis on time management and organization. The use of technology in all classes amplifies the math/logic-based problem solving of the student to prepare them to succeed in college, career, and beyond."}],work:[{company:"General Assembly Immersive Program",title:"Software Engineering Immersive",years:"July 2020 - October 2020",description:"Three-month, 500-hour full-time and full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies."},{company:"Goodwill Industries",title:"Store Manager",years:"October 2013 - July 2020",description:"Built and deployed employee scheduling template using Excel based on payroll dollars to all locations. Won 7 Platinum Performer awards for revenue and contribution growth."},{company:"Target Corporation",title:"Executive Team Lead",years:"September 2004 - October 2013",description:"Strategically reduced store expenditures by lowering the cost of supplies and lowering on the job injuries. Achieved record sales at various locations for multiple months throughout career."}]},portfolio:{projects:[{title:"So Sweet Southern Confections",category:"A small business website used to sell pecan praline treats to residents of the Denver metro area.",image:"sosweet.png",url:"https://www.getsosweet.com",giturl:"https://github.com/micahsellis/getsosweet"},{title:"Drink Machine",category:"Find new cocktail recipes or submit your own! (MongoDB, NodeJS, ExpressJS, Materialize, Google OAuth)",image:"pic03.png",url:"https://drink-machine.onrender.com",giturl:"https://github.com/micahsellis/Drink-Machine"},{title:"Mongoose Flights",category:"A flight tracker built on the mongoose platform (Mongoose, MongoDB, NodeJS, ExpressJS, CSS3)",image:"pic04.png",url:"https://mongoose-flights-3yzc.onrender.com",giturl:"https://github.com/micahsellis/mongoose-flights"},{title:"CyberPunk Connect4",category:"An updated UI to the classic Connect 4 Game (HTML, CSS, JavaScript)",image:"pic05.png",url:"https://micahsellis.github.io/Connect4/",giturl:"https://github.com/micahsellis/Connect4"},{title:"TEMPORARILY UNAVAILABLE",category:"Get Hired - An app to help track your job search progress (ReactJS, MongoDB, NodeJS, ExpressJS, BootStrap)",image:"pic01.png",url:"https://get-hired-now.herokuapp.com",giturl:"https://github.com/micahsellis/Get-Hired"},{title:"TEMPORARILY UNAVAILABLE",category:"Line Guide - Save time by checking how long the wait is to get in anywhere (Django, Python, YelpAPI, PostgreSQL, AmazonWebServices, Materialize)",image:"pic02.png",url:"https://lineguide.herokuapp.com",giturl:"https://github.com/micahsellis/lineguide"}]},testimonials:{testimonials:[{text:"Seriously the best and most amazing person in this cohort, always willing to go out of his way to help everyone",user:"Stephanie Rinehart"},{text:"That Micah Ellis must be one of the most brilliant developers I've ever met! I'm certain one day we'll work at Google together. It is astonishing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of a bootcamp program and have zero on the job developer experience but I am confident he will be a top dev in no time!",user:"Doug Leinen"},{text:"Micah always rejuvenated classmates with fresh backgrounds AND great coding skills",user:"Stephen Yi"}]}}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{data:this.state.resumeData.main}),l.a.createElement(p,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.portfolio}),l.a.createElement(h,{data:this.state.resumeData.resume}),l.a.createElement(v,{data:this.state.resumeData.testimonials}),l.a.createElement(g,{data:this.state.resumeData.main}),l.a.createElement(d,{data:this.state.resumeData.main}))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.85cc5666.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),c=(t(14),t(1)),o=t(2),i=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"/#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home",style:{color:"#111",fontFamily:"sans-serif "}},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",style:{color:"#111",fontFamily:"sans-serif "}},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume",style:{color:"#111",fontFamily:"sans-serif "}},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials",style:{color:"#111",fontFamily:"sans-serif "}},"Testimonials")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("div",null,l.a.createElement("h2",null," ",l.a.createElement("span",{style:{opacity:0}},"."),l.a.createElement("span",{style:{color:"#f099",fontFamily:"sans-serif "},className:"element"})," ")),l.a.createElement("h3",{style:{color:"#111",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("h3",{style:{color:"#111",fontFamily:"sans-serif "}},"Let's ",l.a.createElement("a",{style:{color:"#f099",fontFamily:"sans-serif "},className:"smoothscroll",href:"#about"},"start scrolling "),"and learn more ",l.a.createElement("a",{style:{color:"#f099",fontFamily:"sans-serif "},className:"smoothscroll",href:"#about"},"about me "),". Don't forget to visit my Social Profiles!."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"http://keshav-gupta.com/",target:"_blank",rel:"noopener noreferrer"},"Keshav Gupta - My Website"))))))))}}]),a}(n.Component),f=t(8),h=t.n(f),E=[{type:"Java",level:90,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"Spark",level:90,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"Scala",level:90,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"Hadoop",level:85,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"Hive",level:75,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"Impala",level:80,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"Python",level:90,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"ML",level:50,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"ReactJs",level:60,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"JavaScript",level:70,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"SQL",level:85,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}}],v=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements),l.a.createElement("p",null,e.Achievements2),l.a.createElement("p",null,e.Achievements3)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement(h.a,{skills:E})))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{class:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch.")))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email: "),l.a.createElement("p",{class:"address"},l.a.createElement("span",null,"guptakeshav0414@gmail.com"))))))}}]),a}(n.Component),y=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),k={imagebaseurl:"https://rbhatia46.github.io/",name:"Keshav Gupta",role:"Software Engineer",linkedinId:"https://www.linkedin.com/in/keshav-gupta-/",skypeid:"Your skypeid",roleDescription:" I like dabbling in various parts of Software Enginnering activites and like to learn about new technologies, work on front end development or simply play video games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/keshav-gupta-/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/keshav-Gupta-IS",className:"fa fa-github"}],aboutme:"I have completed my masters students in Information Systems at Northeastern University, Boston. I have been working at ADP since August 2022, I've worked on Big Data tech stack including but not limited to Hadoop, Spark, Scala, Hive, Pig.  I want to become a successful expert in the field of Computer science by channelizing my technical knowledge and skills to ensure personal and professional growth.",address:"",website:"http://keshav-gupta.com/",education:[{UniversityName:"Northeastern University, Boston",specialization:"Information Systems",MonthOfPassing:"May",YearOfPassing:"2022",Achievements:"3.58 GPA"},{UniversityName:"Vellore Institute of Technology, Vellore",specialization:"Information Technology",MonthOfPassing:"May",YearOfPassing:"2018",Achievements:"9.27 GPA"}],work:[{CompanyName:"ADP Inc.",specialization:"Software Engineer",MonthOfLeaving:"August",YearOfLeaving:"2023",Achievements:"Created a latency metrics to identify and resolve Kafka lag.",Achievements2:"Developed a single pane view dashboard for an entire Ad Serving application using Spark, Kafka and Grafana."},{CompanyName:"NTT Data",specialization:"Senior Data Enginner",MonthOfLeaving:"October",YearOfLeaving:"2021 - August 2022",Achievements:"Migrated an in-house Hadoop cluster to AWS using AWS Elastic Kubernetes service, Redshift, and AWS S3.",Achievements2:"Moved data from AWS S3 to Redshift using Spark and Python Scripts.",Achievements3:"Migrated Apache PIG script to Spark Scripts.",Achievements4:"Developed Oozie and crontab jobs for scheduling the independent Spark Jobs."}],skillsDescription:"",skills:[{skillname:"Java"},{skillname:"Spark"},{skillname:"Scala"},{skillname:"Hadoop"},{skillname:"Hive"},{skillname:"Impala"},{skillname:"Python"},{skillname:"Reactjs"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",name:"Stewart Brand"},{description:"The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",name:"Bill Gates"}]},N=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:k}),l.a.createElement(d,{resumeData:k}),l.a.createElement(v,{resumeData:k}),l.a.createElement(b,{resumeData:k}),l.a.createElement(g,{resumeData:k}),l.a.createElement(y,{resumeData:k}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.34edfb0c.chunk.js.map
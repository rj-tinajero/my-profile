import React from 'react';
import './App.css';
import headshot from './assets/profile_headshot.png'
import linkedin from './assets/icon-linkedin.svg'
import github from './assets/icon-github.svg'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 bg"></div>
        <div className="col-md-7 content mx-auto">
          
          <div className="row">
            <div className="col-sm-3 order-sm-2 d-flex justify-content-center headshot-wrapper my-auto"><img className="headshot order-1" src={headshot} /></div>
            <div className="col-sm-9 order-sm-1 title text-center text-sm-left my-auto">
              <h2>Hi, my name is <strong>Richard Tinajero</strong>.</h2>
              <h2>I'm a <strong>Full Stack Developer</strong>.</h2>
            </div>
            
          </div>

          <div className="row">
            <div className="col-sm-12 text-center text-sm-left"><h5>ABOUT</h5></div>
          </div>

          <div className="abt_p">
            <p>I reside in sunny Riverside, California. I am skilled in JavaScript and build projects using modern frameworks like React and Node. I have 
                  4+ years of work experience in operational manufacturing and deployment. I recently took part in a web development
                  certification program run by Bloc. There, I built a number of projects and continue to build more to this very day! 
                  My passions include mentoring college students, guitar, photography, and programming of course! 
            </p>
            {/* <p>This is a new paragragh right here.</p> */}
            <a 
              className="link_out"
              href="https://github.com/rj-tinajero/profile/blob/master/RichardTinajero_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my resume
            </a>
          </div>
          
          {/* <div className="row">
            <div className="col-sm-12 text-center text-sm-left"><h5>PROJECTS</h5></div>
          </div> */}

          {/* <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img  src="..." alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">Profile</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <img  src="..." alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">Profile</p>
                </div>
              </div>
            </div>
          </div> */}


          <div className="row">
            <div className="col-sm-12 text-center text-sm-left"><h5>CONTACT</h5></div>
          </div>
          
          <div className="row">
            <div className="col-sm-9">
              {/* <p>You can find more information about me on my Linkedin profile as well as my GitHub profile.</p> */}
              <p>My preferred method of contact is through email. If you'd like to connect, please email me at</p>
              <a className="link_out" href="mailto:rj.tinajero92@gmail.com">rj.tinajero92@gmail.com</a>
            </div>
            <div className="col-sm-3 social text-center">
              <a className="p-0" href="https://linkedin.com/in/richard-tinajero" target="_blank"><img src={linkedin} /></a>
              <a className="p-2" href="https://github.com/rj-tinajero" target="_blank"><img src={github} /></a>
            </div>
          </div>

          
          
        </div>
      </div>
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import headshot from './assets/profile_headshot.jpg'
import linkedin from './assets/icon-linkedin.svg'
import github from './assets/icon-github.svg'
import todo from './assets/Todo.png'
import profile from './assets/Website.png'
import wiki from './assets/Wiki.png'
import vote from './assets/vote.png'
import email from './assets/icon-email.svg'
import cv from './assets/icon.svg'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 bg"></div>
        <div className="col-md-7 content mx-auto">
          
          <div className="row">
            <div className="col-sm-3 order-sm-2 d-flex justify-content-center headshot-wrapper my-auto">
              <img className="headshot order-1" src={headshot} alt="Richard Tinajero"/>
            </div>
            <div className="col-sm-9 order-sm-1 title text-center text-sm-left my-auto">
              <h2>Hi, my name is <strong>Richard Tinajero</strong>.</h2>
              <h2>I'm a <strong>Full Stack Developer</strong>.</h2>
            </div>
            
          </div>

          <div className="row">
            <div className="col-sm-12 text-center text-sm-left"><h5>ABOUT</h5></div>
          </div>

          <div className="abt_p">
            <p>I reside near Orange County in California. I am skilled in JavaScript and build projects using modern frameworks like React and Node. I have 
                  4+ years of work experience in operational manufacturing and deployment. I recently took part in a web development
                  certification program run by Bloc. There, I built a number of projects and continue to build more to this very day! 
                  My passions include mentoring college students, guitar, photography, and programming of course! 
            </p>
            {/* <p>This is a new paragragh right here.</p> */}
          </div>

          <div className="row social">
            <div className="col-sm-12 text-sm-left text-center">
              <a className="cv-icon" href="https://www.dropbox.com/s/9bwxjt3ym2mfzqc/RichardTinajero_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                <img src={cv} alt="CV logo" />
              </a>
              <a className="p-2" href="mailto:rj.tinajero92@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={email} alt="Email logo" />
              </a>
              <a className="p-2" href="https://linkedin.com/in/richard-tinajero" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedin logo" />
              </a>
              <a className="p-2" href="https://github.com/rj-tinajero" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github logo" />
              </a>
            </div>
          </div>
            
          
          <div className="row">
            <div className="col-sm-12 text-center text-sm-left"><h5>PROJECTS</h5></div>
          </div>

          <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-sm-4 my-auto">
                <img src={todo} className="card-img" alt="Todo App" />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h3 className="card-title-main"><strong>Todo App</strong></h3>
                  <h5 className="card-title skills">REACT / REDUX</h5>
                  <p className="card-text">SPA thats stores tasks within the broswer's local storage. Filter option is included to change view options. Just press the plus button to start!</p>
                  <a className="link" href="https://rj-tinajero.github.io/redux-todo" target="_blank" rel="noopener noreferrer">View demo</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-sm-4 my-auto">
                <img src={vote} className="card-img-vote" alt="Todo App" />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h3 className="card-title-main"><strong>VoteQuote</strong></h3>
                  <h5 className="card-title skills">REACT / FIREBASE</h5>
                  <p className="card-text">Gives you a random quote and you can give your opinion on it by upvoting or downvoting. Quotes and associated vote counts are stored in Firebase's Realtime Database.</p>
                  <a className="link" href="https://rj-tinajero.github.io/vote-quote" target="_blank" rel="noopener noreferrer">View demo</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-sm-4 my-auto">
                <img src={wiki} className="card-img" alt="Todo App" />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h3 className="card-title-main"><strong>Sharepedia</strong></h3>
                  <h5 className="card-title skills">NODE JS / POSTGRES / USER AUTH</h5>
                  <p className="card-text">Wikipedia clone that serves HTML from the server via EJS. Allows users to create and modify wikis. Uses Stripe API to upgrade user accounts. Wikis can be edited and displayed in Markdown syntax.</p>
                  <a className="link" href="https://rj-tinajero-sharepedia.herokuapp.com/" target="_blank" rel="noopener noreferrer">View demo</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-sm-4 my-auto">
                <img src={profile} className="card-img" alt="Todo App" />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h3 className="card-title-main"><strong>Porfolio Page</strong></h3>
                  <h5 className="card-title skills">RESPONSIVE DESIGN / HTML / BOOTSTRAP CSS</h5>
                  <p className="card-text">The page you see here was built off of a Figma design from a friend of mine. Its "pexel-perfect" to design and fully responsive. Shrink the browser window to see!</p>
                  <p className="blurb">(Currrently viewing)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;

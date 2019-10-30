import React from 'react';
import image from './sally-student.jpg';
import './App.css';

function App(props) {
  return (
    <main>
      <section className="top">
        <header>
          <h1>{props.name}</h1>
        </header>
      </section>
      <div className="contact-picture-flex">
        <section className="contact">
          <h2>Contact Info</h2>
          <address>
            <a href="mailto:sally.student@gmail.com">sally.student@gmail.com</a><br />
            <a href="tel:+16789234443">(678) 923-4443</a>
          </address>
        </section>
        <section className="picture">
          <img src={image} alt="This is a picture of me"/>
        </section>
      </div>
      <section className="work">
        <h2>Work Experience</h2>
        <p className="job"><strong>Full-stack Developer -- Google (2013-2016)</strong></p>
        <p className="description">In this job I maintained Google's front and back end operations.</p>
        <p className="job"><strong>Intern -- Google (2011-2013)</strong></p>
        <p className="description">In this role I was "Okay, Google" for 3 years, responding to everyone's questions.</p>
      </section>
      <section className="education">
        <h2>Education Background</h2>
        <p className="degree"><strong>B.S. In Computer Science -- Biola University, 2012</strong></p>
      </section>
    </main>
  );
}

export default App;

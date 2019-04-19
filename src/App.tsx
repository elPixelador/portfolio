import React, { Component } from 'react';
import './styles.scss';
import { Terminal } from './components/Terminal';
import { Section } from './components/Section';
import { EmployerDetails, EmployerList } from './components/EmployerList';

const pastAndCurrentEmployers: EmployerDetails[] = [
  { 
    href: "https://editor.spiff.com.au/",
    src: "img/spiff-logo.png" 
  },
  { 
    href: "http://learndistrict.com/",
    src: "img/ld-logo.png" 
  }
]

class App extends Component {
  render() {
    return (
      <div className="flex-wrapper">
        <div className="main-content">
          <h1 className="title">Liam Parker</h1>
          <div className="sub">
            <Section title="About me.">
              <p className="bio">
                I am a junior software developer based in Melbourne, Australia. 
                I currently work at #Spiff, an exciting tech startup in Southbank.
                We're working on a cloud based packaging customization platform.
              </p>
            </Section>
            <Section title="People I've worked with.">
              <EmployerList employerList={pastAndCurrentEmployers}/>
            </Section>
            <Section title="Contributions and personal work.">
              <p>Coming Soon</p>
            </Section>
            <Section title="Links.">
              <div className="social-media">
                <a href="https://github.com/elInfidel" target="_blank">
                  <img src="img/github-logo.png" />
                </a>
                <a href="https://www.linkedin.com/in/liam-parker-40063648/" target="_blank">
                  <img src="img/linked-in-logo.png" />
                </a>
              </div>
            </Section>
          </div>
        </div>
        <div className="term-wrapper">
          <Terminal />
        </div>
      </div>
    );
  }
}

export default App;
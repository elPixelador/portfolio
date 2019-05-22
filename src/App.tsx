import React, { Component } from 'react';
import { Section } from './components/Section';
import { ElementDetails, ElementList } from './components/ElementList';

import './styles.scss';

const pastAndCurrentEmployers: ElementDetails[] = [
  { 
    name: "Spiff Pty Ltd",
    href: "https://editor.spiff.com.au/",
    src: "img/spiff-logo.png" 
  },
  { 
    name: "Learn District",
    href: "http://learndistrict.com/",
    src: "img/ld-logo.png" 
  }
]

const contributions: ElementDetails[] = [
  { 
    name: "OpenRCT2 ",
    href: "https://openrct2.org/",
    src: "img/openrct2-logo.png" 
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
              <img className="personal-photo" src="https://avatars3.githubusercontent.com/u/7558040?s=460&v=4" />
              <p className="bio">
                I am a junior software developer based in Melbourne, Australia. 
                I currently work at #Spiff, an exciting tech startup in Southbank.
                We're working on a cloud based packaging customization platform.
              </p>
            </Section>
            <Section title="People I've worked with.">
              <ElementList elements={pastAndCurrentEmployers} size="standard" />
            </Section>
            <Section title="Contributions and personal work.">
            <ElementList elements={contributions} size="small" />
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
      </div>
    );
  }
}

export default App;
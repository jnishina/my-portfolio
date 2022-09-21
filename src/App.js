import React, { useState } from "react";
import './App.css';
import ReactFullpage from "@fullpage/react-fullpage";

import NavBar from './components/Navbar';
import Title from './components/Title';

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

const originalColors = [
  "#DAF7A6",
  "#FEFBEA"
];

const App = () => {
  const [sectionsColor, setSectionsColor] = useState([...originalColors].concat(originalColors));
  const [fullpages, setFullPages] = useState(
    [
      {
        page: "Title",
        component: <Title />
      },
      {
        page: "About",
        component: <h3>About</h3>
      },
      {
        page: "Work",
        component: <h3>Work</h3>
      },
      {
        page: "Contact",
        component: <h3>Contact</h3>
      }
    ]
  );

  function onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  if (!fullpages.length) {
    return null;
  }

  return (
    <div className="App">
      <NavBar />
      <ReactFullpage
        debug
        licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
        anchors={["title", "about", "work", "contact"]}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ page, component }) => (
              <div key={page} className={SEL}>
                <div className="slide">
                  {component}
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;

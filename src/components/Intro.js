import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Email } from "@mui/icons-material";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi, "}
            <span className="intro-name">{"Mark Kimathi"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
          Dedicated Computer Science student and proficient software developer with a
          strong passion for designing, installing, testing, and maintaining sophisticated
          software systems. Creativity and technical expertise span across various platforms
          and programming languages, enabling to craft innovative solutions tailored to
          complex problems. Excel in both independent projects and collaborative team
          environments.
          </div>
          <a
            href="mailto:markangelkimathi@gmail.com"
            className="intro-contact"
          >
            <Email></Email>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
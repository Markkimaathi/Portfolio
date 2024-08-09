import React from "react";
import "../styles/Projects.css";
import { FolderOpenRounded } from "@mui/icons-material";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const spotlightProjects = {
      "Church Management": {
        title: "Church Management",
        desc: "Management of a church using backend and frontend technology.",
        techStack: "JavaScript, C#, React.JS, HTML, Microsoft SQL, CSS",
        link: "https://github.com/Markkimaathi/churchManagement",
        open: "https://github.com/Markkimaathi/churchManagement",
      },
      "Food delivery": {
        title: "Food Delivery",
        desc: "Simulation of a food delivery app with products.",
        techStack: "NODE.JS, REACT.JS, JavaScript, CSS, HTML",
        link: "https://github.com/Markkimaathi/FoodDelivery",
        open: "https://github.com/Markkimaathi/FoodDelivery",
      },
      CrudApplication: {
        title: "CrudApp",
        desc: "My first CRUD App creation, API.",
        techStack: "C#, .NET",
        link: "https://github.com/Markkimaathi/CrudOperationInNetCore",
        open: "https://github.com/Markkimaathi/CrudOperationInNetCore/",
      },
      ExpenseT: {
        title: "Expense.T",
        desc: "A management system which allows users to track their expenses, as well as budget for their spenditure",
        techStack: "JavaScript, MongoDB, C#,Html",
        link: "https://github.com/Markkimaathi/Expense.T",
        open: "https://github.com/Markkimaathi/Expense.T"
      },
      SimpleCalculator: {
        title: "Calculator",
        desc: "A simple calculator which returns results",
        techStack: "JavaScript, Html, Css",
        link: "https://github.com/Markkimaathi/Simple-calculator",
        open: "https://github.com/Markkimaathi/Simple-calculator"
      },
      OdooCustomization: {
        title: "Odoo",
        desc: "Configurations done on Odoo, customizated several modules and created new ones too",
        techStack: "Python, XML, PostgreSQL",
        link: "https://github.com/Markkimaathi/odoo",
        open: "https://github.com/Markkimaathi/odoo"
      }
    };

    return (
      <div id="projects">
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(spotlightProjects).map((key, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRounded style={{ fontSize: 35 }} />
                    </div>
                    <ExternalLinks
                      githubLink={spotlightProjects[key]["link"]}
                      openLink={spotlightProjects[key]["open"]}
                    />
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">
                    {spotlightProjects[key]["desc"]}
                  </div>
                  <div className="card-tech">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
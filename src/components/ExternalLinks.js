import React from "react";
import { GitHub, OpenInBrowser } from "@mui/icons-material";

class ExternalLinks extends React.Component {
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
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHub
            style={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          />
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowser
              style={{
                fontSize: 25,
                color: "var(--lightest-slate)"
              }}
            />
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;

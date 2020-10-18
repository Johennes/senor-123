import React from 'react';

class IconTheme extends React.Component {
  render() {
    return <svg
        className={this.props.className}    
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        className="theme-button-icon-theme-1"/>
      <rect
        x="35"
        y="5"
        width="60"
        height="90"
        className="theme-button-icon-theme-2"/>
      <rect
        x="65"
        y="5"
        width="30"
        height="90"
        className="theme-button-icon-theme-3"/>
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        className="theme-button-icon-theme-border"
        fill="none"
        strokeWidth="10"/>
    </svg>;
  }
}

export default IconTheme;

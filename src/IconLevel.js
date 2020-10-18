import React from 'react';

class IconLevel extends React.Component {
  render() {
    return <svg
        className={this.props.className}    
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
      <rect
        x="0"
        y="67"
        width="100"
        height="33"
        className="theme-button-icon-main"/>
      <rect
        x="33"
        y="34"
        width="67"
        height="66"
        className="theme-button-icon-main"/>
      <rect
        x="66"
        y="0"
        width="34"
        height="100"
        className="theme-button-icon-main"/>
    </svg>;
  }
}

export default IconLevel;

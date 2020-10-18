import React from 'react';

class BackgroundTriangleDown extends React.Component {
  render() {
    return <svg
        className={this.props.className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
      <defs>
        <path
          id={this.getId('triangle')}
          d="M21 100 Q0 100 9 81 L40 18 Q50 0 60 18 L91 81 Q100 100 79 100Z"/>
        <clipPath id={this.getId('clip')}>
          <use xlinkHref={this.getIdReference('triangle')}/>
        </clipPath>
        <filter id={this.getId('blur')} x="0" y="0" width="100%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8"/>
        </filter>
      </defs>
      <g clipPath={this.getIdUrlReference('clip')} transform="rotate(180 50 50)">
        <use xlinkHref={this.getIdReference('triangle')} className="theme-button-background-main"/>
        <use xlinkHref={this.getIdReference('triangle')} className="theme-button-background-blur" filter={this.getIdUrlReference('blur')}/>
      </g>
    </svg>;
  }

  getId = (suffix) => {
    return `${this.props.parentId}-${suffix}`;
  }

  getIdReference = (suffix) => {
    return `#${this.props.parentId}-${suffix}`;
  }

  getIdUrlReference = (suffix) => {
    return `url(#${this.props.parentId}-${suffix})`;
  }
}

export default BackgroundTriangleDown;

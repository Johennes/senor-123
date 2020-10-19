import React from 'react';

class BackgroundEllipse extends React.Component {
  render() {
    return <svg
        className={this.props.className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
      <defs>
        <rect
          id={this.getId('rect')}
          x="0" y="0" rx="10" ry="10" width="100" height="100"/>
        <clipPath id={this.getId('clip')}>
          <use xlinkHref={this.getIdReference('rect')}/>
        </clipPath>
        <filter id={this.getId('blur')} x="-4%" y="-4%" width="108%" height="108%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
        </filter>
      </defs>
      <g clipPath={this.getIdUrlReference('clip')}>
        <use xlinkHref={this.getIdReference('rect')} className="theme-button-background-main"/>
        <use xlinkHref={this.getIdReference('rect')} className="theme-button-background-blur" filter={this.getIdUrlReference('blur')}/>
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

export default BackgroundEllipse;

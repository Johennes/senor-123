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
        <circle
          id={this.getId('circle')}
          cx="50" cy="50" r="50"/>
        <clipPath id={this.getId('clip')}>
          <use xlinkHref={this.getIdReference('circle')}/>
        </clipPath>
        <filter id={this.getId('blur')} x="-4%" y="-4%" width="108%" height="108%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
        </filter>
      </defs>
      <g clipPath={this.getIdUrlReference('clip')}>
        <use xlinkHref={this.getIdReference('circle')} className="theme-button-background-main"/>
        <use xlinkHref={this.getIdReference('circle')} className="theme-button-background-blur" filter={this.getIdUrlReference('blur')}/>
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

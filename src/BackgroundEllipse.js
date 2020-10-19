import React from 'react';

class BackgroundEllipse extends React.Component {
  render() {
    return <svg
        className={this.props.className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 200 100"
        preserveAspectRatio="none">
      <defs>
        <path
          id={this.getId('ellipse')}
          d="M50 0 A50 50 0 0 0 50 100 L150 100 A50 50 0 0 0 150 0z"/>
        <clipPath id={this.getId('clip')}>
          <use xlinkHref={this.getIdReference('ellipse')}/>
        </clipPath>
        <filter id={this.getId('blur')} x="-4%" y="-8%" width="108%" height="116%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8"/>
        </filter>
      </defs>
      <g clipPath={this.getIdUrlReference('clip')}>
        <use xlinkHref={this.getIdReference('ellipse')} className="theme-button-background-main"/>
        <use xlinkHref={this.getIdReference('ellipse')} className="theme-button-background-blur" filter={this.getIdUrlReference('blur')}/>
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

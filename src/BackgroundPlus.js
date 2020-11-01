import React from 'react';

class BackgroundPlus extends React.Component {
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
          id={this.getId('line')}
          d="M12 38 L38 38 L38 12 A12 12 0 0 1 62 12 L62 38 L88 38 A12 12 0 0 1 88 62 L62 62 L62 88 A12 12 0 0 1 38 88 L38 62 L12 62 A12 12 0 0 1 12 38 Z"/>
        <clipPath id={this.getId('clip')}>
          <use xlinkHref={this.getIdReference('line')}/>
        </clipPath>
        <filter id={this.getId('blur')} x="-4%" y="-4%" width="108%" height="108%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
        </filter>
      </defs>
      <g clipPath={this.getIdUrlReference('clip')}>
        <use xlinkHref={this.getIdReference('line')} className="theme-button-background-main"/>
        <use xlinkHref={this.getIdReference('line')} className="theme-button-background-blur" filter={this.getIdUrlReference('blur')}/>
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

export default BackgroundPlus;

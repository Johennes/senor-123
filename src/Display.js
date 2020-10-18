import React from 'react';
import './Display.css';

class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <div className="Display-lcd">
          <div>
            <div className="Display-line1">{this.composeLine1()}</div>
            <div className="Display-line2">{this.composeLine2()}</div>
          </div>
          <div className="Display-icon">{this.composeIcon()}</div>
        </div>
      </div>
    );
  }

  composeLine1 = () => {
    if (!this.props.on) {
      return '\u00A0';
    }
    return `${this.props.number1} ${this.props.operator} ${this.props.number2} = ${this.props.number3}`
  }

  composeLine2 = () => {
    if (!this.props.on) {
      return '\u00A0';
    }
    let levels = [1, 2, 3].map(level => { return level === this.props.level ? `${level}` : '\u00A0' }).join('\u00A0');
    let results = this.props.results.map(result => { return result ? '★' : '☆' }).join('');
    return `${levels}\u00A0${results}`; 
  }

  composeIcon = () => {
    if (!this.props.on) {
      return '\u00A0';
    }
    if (this.props.result === true) {
      return '😊';
    }
    if (this.props.result === false) {
      return this.props.done ? '🤔' :'☹️';
     }
     return '';
  }
}

export default Display;

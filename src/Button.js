import React from 'react';
import './Button.css';
import BackgroundCircle from './BackgroundCircle'
import BackgroundEllipse from './BackgroundEllipse'
import BackgroundMinus from './BackgroundMinus'
import BackgroundPlus from './BackgroundPlus'
import BackgroundRect from './BackgroundRect'
import BackgroundTriangleUp from './BackgroundTriangleUp'
import BackgroundTriangleDown from './BackgroundTriangleDown'
import IconLevel from './IconLevel'
import IconTheme from './IconTheme'

class Button extends React.Component {
  render() {
    return <div className={`Button Button-${this.props.type}`} onClick={this.props.onClick}>
      <div className="Button-title theme-button-text">{this.props.title}</div>
      {this.getIcon()}
      {this.getBackground()}
    </div>;
  }

  getBackground = () => {
    if (this.props.type === 'circle') {
      return <BackgroundCircle
        parentId={this.props.id}
        className="Button-background"/>
    }
    if (this.props.type === 'ellipse') {
      return <BackgroundEllipse
        parentId={this.props.id}
        className="Button-background"/>
    }
    if (this.props.type === 'minus') {
      return <BackgroundMinus
        parentId={this.props.id}
        className="Button-background"/>
    }
    if (this.props.type === 'plus') {
      return <BackgroundPlus
        parentId={this.props.id}
        className="Button-background"/>
    }
    if (this.props.type === 'rect') {
      return <BackgroundRect
        parentId={this.props.id}
        className="Button-background"/>
    }
    if (this.props.type === 'triangle-up') {
      return <BackgroundTriangleUp
        parentId={this.props.id}
        className="Button-background"/>
    }
    if (this.props.type === 'triangle-down') {
      return <BackgroundTriangleDown
        parentId={this.props.id}
        className="Button-background"/>
    }
  }

  getIcon = () => {
    if (this.props.icon === 'level') {
      return <IconLevel className="Button-icon"/>
    }
    if (this.props.icon === 'theme') {
      return <IconTheme className="Button-icon"/>
    }
  }
}

export default Button;

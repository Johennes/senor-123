import React from 'react';
import './Calculator.css';
import Button from './Button.js'
import Display from './Display.js'
import OperationAddition from './OperationAddition.js'
import OperationSubtraction from './OperationSubtraction.js'

class Calculator extends React.Component {
  constructor() {
    super();
    let level = 1;
    this.themes = ['default', 'unicorn', 'forest', 'grapes', 'sun'];
    this.state = {
      on: true,
      theme: 0,
      operation: 'addition',
      level,
      problems: [this.getOperation('addition').createProblem(level)],
      input: [],
      done: false,
      result: null,
      results: []
    };
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    let problem = this.getProblem();
    return (
      <div className={`theme-${this.themes[this.state.theme]}`}>
        <table className="Calculator-table" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td colSpan="5">
                <Display
                  on={this.state.on}
                  done={this.state.done}
                  number1={problem.number1}
                  number2={problem.number2}
                  number3={this.state.input.map(String).join('')}
                  operator={this.getOperation(this.state.operation).getSymbol()}
                  level={this.state.level}
                  result={this.state.result}
                  results={this.state.results}/>
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="4">
                <div className="Calculator-manufacturer">Tex-Mex Instruments</div>
                <div className="Calculator-name">Señor 1.2.3</div>
              </td>
            </tr>
            <tr>
              <td><Button
                id="button-on"
                title="ON"
                type="triangle-up"
                onClick={() => this.powerOn()}/></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><Button
                id="button-off"
                title="OFF"
                type="triangle-down"
                onClick={() => this.powerOff()}/></td>
              <td><Button
                id="button-level"
                title="&nbsp;"
                type="rect"
                icon="level"
                onClick={() => this.switchLevel()}/></td>
              <td><Button
                id="button-theme"
                title="&nbsp;"
                type="rect"
                icon="theme"
                onClick={() => this.switchTheme()}/></td>
              <td><Button
                id="button-calc"
                title="CALC"
                type="rect"
                onClick={() => this.resolve()}/></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td><Button
                id="button-1"
                title="1"
                type="circle"
                onClick={() => this.enterDigit(1)}/></td>
              <td><Button
                id="button-2"
                title="2"
                type="circle"
                onClick={() => this.enterDigit(2)}/></td>
              <td><Button
                id="button-3"
                title="3"
                type="circle"
                onClick={() => this.enterDigit(3)}/></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td><Button
                id="button-4"
                title="4"
                type="circle"
                onClick={() => this.enterDigit(4)}/></td>
              <td><Button
                id="button-5"
                title="5"
                type="circle"
                onClick={() => this.enterDigit(5)}/></td>
              <td><Button
                id="button-6"
                title="6"
                type="circle"
                onClick={() => this.enterDigit(6)}/></td>
              <td><Button
                id="minus"
                title="&nbsp;"
                type="minus"
                onClick={() => this.switchToOperation('subtraction')}/></td>
            </tr>
            <tr>
              <td></td>
              <td><Button
                id="button-7"
                title="7"
                type="circle"
                onClick={() => this.enterDigit(7)}/></td>
              <td><Button
                id="button-8"
                title="8"
                type="circle"
                onClick={() => this.enterDigit(8)}/></td>
              <td><Button
                id="button-9"
                title="9"
                type="circle"
                onClick={() => this.enterDigit(9)}/></td>
              <td><Button
                id="plus"
                title="&nbsp;"
                type="plus"
                onClick={() => this.switchToOperation('addition')}/></td>
            </tr>
            <tr>
              <td colSpan="2"><Button
                id="button-clear"
                title="C"
                type="ellipse"
                onClick={() => this.clear()}/></td>
              <td><Button
                id="button-0"
                title="0"
                type="circle"
                onClick={() => this.enterDigit(0)}/></td>
              <td colSpan="2"><Button
                id="button-submit"
                title="="
                type="ellipse"
                onClick={() => this.check()}/></td>
            </tr>
          </tbody>
        </table>
        <footer className="Calculator-footer">
          <div>
            Freely adapted from the original <a href="http://www.datamath.org/Edu/MathToGo123.htm">Professor 1.2.3 by Texas Instruments</a>. This site is neither affiliated with nor endorsed by Texas Instruments.
          </div>
          <div>
            Licensed under the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
          </div>
          <div>
            All emojis designed by <a href="https://openmoji.org/" rel="nofollow">OpenMoji</a> – the open-source emoji and icon project. License: <a href="https://creativecommons.org/licenses/by-sa/4.0/#" rel="nofollow">CC BY-SA 4.0</a>
          </div>
          <div>
            <a href="https://github.com/johennes/senor-123">GitHub</a>
          </div>
        </footer>
      </div>
    );
  }

  powerOn = () => {
    if (this.state.on) {
      return;
    }
    let level = 1;
    this.setState({
      on: true,
      operation: 'addition',
      level,
      problems: [this.getOperation('addition').createProblem(level)],
      input: [],
      done: false,
      result: null,
      results: []
    });
  }

  powerOff = () => {
    if (!this.state.on) {
      return;
    }
    this.setState({
      on: false
    });
  }

  getOperation = (name) => {
    if (name === "addition") {
      return new OperationAddition();
    }
    if (name === "subtraction") {
      return new OperationSubtraction();
    }
  }

  getProblem = () => {
    const [problem] = this.state.problems.slice(-1);
    return problem;
  }

  enterDigit = (number) => {
    if (!this.state.on || this.state.done || this.state.input.length >= 2) {
      return;
    }
    this.setState({input: [...this.state.input, number]});
  }

  clear = () => {
    if (!this.state.on || this.state.done) {
      return;
    }
    this.setState({input: []});
  }

  check = () => {
    if (!this.state.on || this.state.done || this.state.input.length === 0) {
      return;
    }
    let inputDecimal = 0;
    for (let i = 0; i < this.state.input.length; ++i) {
      inputDecimal += Math.pow(10, i) * this.state.input[this.state.input.length - 1 - i];
    }
    let result = this.getProblem().number3 === inputDecimal;
    if (this.state.result === null) {
      this.setState({results: [...this.state.results, result]});
    }
    if (result) {
      this.setState({done: true, result: true});
      this.switchToNextProblem(2000);
    } else {
      this.setState({result: false});
    }
  }

  resolve = () => {
    if (!this.state.on || this.state.done) {
      return;
    }
    let state = {
      input: [...`${this.getProblem().number3}`].map(i => parseInt(i)),
      done: true
    };
    if (this.state.result !== false) {
      state.result = false;
      state.results = [...this.state.results, false];
    }
    this.setState(state);
    this.switchToNextProblem(2000);
  }

  switchLevel = () => {
    if (!this.state.on || this.state.done) {
      return;
    }
    let level = 1 + (this.state.level % 3);
    this.setState({
      level: level,
      problems: [this.getOperation(this.state.operation).createProblem(level)],
      input: [],
      done: false,
      result: null,
      results: []
    });
  }

  switchTheme = () => {
    this.setState({theme: (this.state.theme + 1) % this.themes.length});
  }

  switchToOperation = (name) => {
    if (!this.state.on || this.state.done || name === this.state.operation) {
      return;
    }
    let operation = this.getOperation(name);
    this.setState({
      operation: name,
      problems: [operation.createProblem(this.state.level)],
      input: [],
      done: false,
      result: null,
      results: []
    });
  }

  switchToNextProblem = (timeout) => {
    if (timeout > 0) {
      setTimeout(() => {
        this.switchToNextProblem(0);
      }, timeout);
    } else {
      let problems = this.state.results.length >= 5 ? [] : this.state.problems;
      let operation = this.getOperation(this.state.operation);
      while (true) {
        let problem = operation.createProblem(this.state.level);
        if (!problems.some(p => p.number1 === problem.number1 && p.number2 === problem.number2)) {
          problems.push(problem);
          break;
        }
      }
      this.setState({
        problems,
        input: [],
        done: false,
        result: null,
        results: this.state.results.length >= 5 ? [] : this.state.results
      });
    }
  }

  handleKeyDown = (event) => {
    if (!this.state.on || this.state.done) {
      return;
    }
    if (this.state.done) {
      this.switchToNextProblem(0);
    } else if (event.key.match(/^[0-9]$/)) {
      this.enterDigit(parseInt(event.key));
    } else if (event.key === 'Enter') { 
      this.check();
    } else if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') {
      this.clear();
    } else {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
  }
}

export default Calculator;

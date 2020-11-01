class OperationAddition {
  getSymbol = () => {
    return "+"
  }

  createProblem = (level) => {
    let number1 = this.getRandomInteger(this.getMinimumOperand(level), this.getMaximumOperand(level));
    let number2 = this.getRandomInteger(this.getMinimumOperand(level), this.getMaximumResult(level) - number1);
    return {number1, number2, number3: number1 + number2};
  }

  getMinimumOperand = (level) => {
    if (level === 1) {
      return 1;
    } else if (level === 2) {
      return 2;
    } else if (level === 3) {
      return 5;
    }
  }

  getMaximumOperand = (level) => {
    if (level === 1) {
      return 4;
    } else if (level === 2) {
      return 8;
    } else if (level === 3) {
      return 15;
    }
  }

  getMaximumResult = (level) => {
    if (level === 1) {
      return 5;
    } else if (level === 2) {
      return 10;
    } else if (level === 3) {
      return 20;
    }
  }

  getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default OperationAddition;

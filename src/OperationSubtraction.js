class OperationSubtraction {
  getSymbol = () => {
    return '–';
  }

  createProblem = (level) => {
    let number1 = this.getRandomInteger(this.getMinimumOperand(level), this.getMaximumOperand(level));
    let number2 = this.getRandomInteger(1, number1 - 1);
    return {number1, number2, number3: number1 - number2};
  }

  getMinimumOperand = (level) => {
    if (level === 1) {
      return 2;
    } else if (level === 2) {
      return 3;
    } else if (level === 3) {
      return 5;
    }
  }

  getMaximumOperand = (level) => {
    if (level === 1) {
      return 5;
    } else if (level === 2) {
      return 9;
    } else if (level === 3) {
      return 15;
    }
  }

  getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default OperationSubtraction;

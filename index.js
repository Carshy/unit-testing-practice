// *********Task 1*************
const stringFunction = {
  // Arrange
  stringLength: (string) => {
    // Act
    if (string.length >= 1 && string.length <= 10) {
      return string.length;
    } else {
      throw 'The string is too short or too long';
    }
  },

  //Arrange
  reverseString: (string) => {
    // Act
    let reverseString = string.split('').reverse().join('');
    return reverseString;
  },
};

// *******Task 3***************

class calculator {
    constructor(numX, numY) {
        this.numX = numX;
        this.numY = numY;
    }

    static add(num1, num2) {
        return num1 + num2;
    }

    static subtract(num1, num2) {
        return num2 - num1;
    }

    static divide(num1, num2) {
        return num1 / num2;
    }

    static multiply(num1, num2) {
        return num1 * num2;
    }
}

// testing
describe('Addition', () => {
    test('adds 3 and 2', () => {
      expect(calculator.add(3, 2)).toEqual(5);
    });

    test('adds 16 and 14', () => {
        expect(calculator.add(16, 14)).toEqual(30);
      });

      test('adds 4 and 4', () => {
        expect(calculator.add(4, 4)).toEqual(8);
      });
 });
 describe('subtraction', () => {
    test('subtracts 4 from 6', () => {
      expect(calculator.subtract(4, 6)).toEqual(2);
    });

    test('subtracts 10 from 25', () => {
        expect(calculator.subtract(10, 25)).toEqual(15);
      });

      test('subtracts 10 from 12', () => {
        expect(calculator.subtract(10, 12)).toEqual(2);
      });
 });

 describe('division', () => {
    test('divides 60 by 10', () => {
      expect(calculator.divide(60, 10)).toEqual(6);
    });

    test('divides 6 by 2', () => {
        expect(calculator.divide(6, 2)).toEqual(3);
      });

      test('divides 30 by 10', () => {
        expect(calculator.divide(30, 10)).toEqual(3);
      });
});
  
describe('multiplication', () => {
    test('multiplies 5 by 3', () => {
      expect(calculator.multiply(5, 3)).toEqual(15);
    });

    test('multiplies 2 by 8', () => {
        expect(calculator.multiply(2, 8)).toEqual(16);
      });

      test('multiplies 12 by 2', () => {
        expect(calculator.multiply(12, 2)).toEqual(24);
      });
  
  });

// *************Task 4***************
const capitalize = (string) => {
    const str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
}
describe('capital', () => {
  it('returns the string with first letter capitalized', () => {
      const string = 'musoko';
  expect(capitalize(string)).toMatch('Musoko');
  })
})

module.exports = stringFunction;

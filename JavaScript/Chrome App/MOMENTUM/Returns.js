// const age = 96;

// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiple: function (a, b) {
        return a * b;
    },
    pow: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 5);
console.log(plusResult);
const minusResult = calculator.minus(plusResult, 5);
const divideResult = calculator.divide(2, minusResult);
const multipleResult = calculator.multiple(divideResult, plusResult);
const powResult = calculator.pow(multipleResult, minusResult);

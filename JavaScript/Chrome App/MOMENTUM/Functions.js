// //1
// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
// }

// sayHello("kkk", 12);
// sayHello("qqq", 83);
// sayHello("ooo", 33);

// //2
// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// function divide(a, b) {
//     console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);

const player = {
    name: "kkk",
    sayHello: function (otherPersonName) {
        console.log("Hello " + otherPersonName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("ooo");
player.sayHello("sss");

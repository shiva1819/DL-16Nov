// toFixed(), Math.round(), Math.ceil(), Math.random(), Math.floor(), toString();

var num = 0.8999999;
console.log(num.toFixed(4));

num = num.toString();
num = +num;
console.log(typeof num);

// Math.round();
//  < 0.5 - 0
//  > 0.5 - 1;

console.log(Math.round(0.00001));

//  Math.ceil()
// 0.099; - 1
// 0.0001 - 1

console.log(Math.ceil(5.00001));
console.log(Math.ceil(10.9999));

// Math.floor();

console.log(Math.floor(0.999999));
console.log(Math.floor(5.999999));

// Math.random();

console.log("Random Number " + Math.ceil(Math.random() * 10));
console.log("Random Number " + Math.floor(Math.random() * 10));

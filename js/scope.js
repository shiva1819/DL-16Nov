"use strict";
var fetechData;
// scope ;
var a; // global scope;
a = 0;
var def = 11; // Hoisting

var b = 20;

function demo() {
  console.log(a);
  var abc = 0; // local Scope
}

demo();
// console.log(abc);
console.log(def);

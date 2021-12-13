//  if, if-else, if-else-if

var str = "1234935";

// true || true - true
// true && false - true - false
// false  || true - true
// false || false - false

var Name = "1121";
console.log(str.length == 5);
if (Name.length !== 0 && Name !== undefined) {
  console.log(Name);
} else {
  console.log("false");
}

// from Validation:

if (str.length == 3) {
  console.log("the value is 3");
} else if (str.length == 4) {
  console.log("the value is 4");
} else if (str.length == 5) {
  console.log("the value is 5");
} else if (str.length == 6) {
  console.log("the value is 6");
} else {
  console.log("something went wrong!");
}

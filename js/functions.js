// alert("demo");

// key       Name        () { }
// function  functionName()

// demo();
function demo() {
  alert("test");
}

// console.log(demo);

// Function with no Name:
var demoFn = function () {
  console.log("function with No Name...");
};

demoFn();

// Self Invoking Function
(function () {
  console.log("Self Invoking Function...");
})();

// Pure Function

function pureFn(a) {
  return a;
}

// To call the full name of user;
function userName(a, b) {
  console.log(false || true);
  if (
    a == undefined ||
    a == null ||
    a == "" ||
    b == undefined ||
    b == null ||
    b == ""
  ) {
    alert("Please enter the details");
  } else {
    console.log("firstName: " + a, "lastName: " + b);
    return "firstName: " + a + "---" + "lastName: " + b;
  }
}

userName("avalue", "bvalue");

// First Class Function;
var userDetails = function (a, b) {
  // console.log(false || true);
  if (
    a == undefined ||
    a == null ||
    a == "" ||
    b == undefined ||
    b == null ||
    b == ""
  ) {
    alert("Please enter the details");
  } else {
    // console.log("firstName: " + a, "lastName: " + b);
    return "firstName: " + a + " -- " + "lastName: " + b;
  }
};

console.log(userDetails("abc,", "def ") + "Middle Name: Aron");

// pureFn(10);
// pureFn(20);
// pureFn(30);
// pureFn(40);
// pureFn(50);

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

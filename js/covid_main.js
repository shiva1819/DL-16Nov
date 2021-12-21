var _name = document.getElementById("name"); // User Name
var _password = document.getElementById("password"); // Passwrod
var _email = document.getElementById("email"); // Email
var _aadhar = document.getElementById("aadhar"); // aadhar Number
var _contact = document.getElementById("contact"); // Contact Number
var _vaccineName = document.getElementById("vaccineName"); // Vaccince Name
var _dose1 = document.getElementById("dose1"); // dose - 1
var _dose2 = document.getElementById("dose2"); // dose - 2

var signup = document.getElementById("signup"); // Sign Up
var userCollection = [];
/*
  @Register event on Signup Button and Get the Values of User Information

*/

localStorage.setItem("name", "Shivaprasad");
localStorage.setItem("age", "20");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));

signup.addEventListener("click", function () {
  console.log(_name.value);
  var $userDetails = {};

  // if(_name.value !== "" || _name.value.length > 4){
  //   $userDetails.name = _name.value;
  // }else if(){

  // }else if(){

  // }else{

  // }

  $userDetails.password = _password.value;
  $userDetails.email = _email.value;
  $userDetails.aadhar = _aadhar.value;
  $userDetails.contact = _contact.value;
  $userDetails.vaccineName = _vaccineName.value;
  $userDetails.dose1 = _dose1.value;
  $userDetails.dose2 = _dose2.value;

  console.log($userDetails);

  userCollection.push($userDetails);
  console.log(userCollection);

  for (var i = 0; i < userCollection.length; i++) {
    console.log("<h1>" + userCollection[i].name + "</h1>");
  }

  // Web Storgae: local, session:

  localStorage.setItem("covidInfo", userCollection);

  console.log(localStorage.getItem("covidInfo")[0]);

  // window.location.href = "../contact.html"; // to get ir set current location.
  // console.log(window.location.href);
});

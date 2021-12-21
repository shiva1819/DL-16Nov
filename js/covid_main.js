var _name = document.getElementById("name"); // User Name
var _password = document.getElementById("password"); // Passwrod
var _email = document.getElementById("email"); // Email
var _aadhar = document.getElementById("aadhar"); // aadhar Number
var _contact = document.getElementById("contact"); // Contact Number
var _vaccineName = document.getElementById("vaccineName"); // Vaccince Name
var _dose1 = document.getElementById("dose1"); // dose - 1
var _dose2 = document.getElementById("dose2"); // dose - 2

var signup = document.getElementById("signup"); // Sign Up

/*
  @Register event on Signup Button and Get the Values of User Information

*/

signup.addEventListener("click", function () {
  console.log(_name.value);
  var $userDetails = {};
  $userDetails.name = _name.value;
  $userDetails.password = _password.value;
  $userDetails.email = _email.value;
  $userDetails.aadhar = _aadhar.value;
  $userDetails.contact = _contact.value;
  $userDetails.vaccineName = _vaccineName.value;
  $userDetails.dose1 = _dose1.value;
  $userDetails.dose2 = _dose2.value;

  console.log($userDetails);
});

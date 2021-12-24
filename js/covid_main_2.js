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
var _body = document.getElementsByTagName("body")[0];

// localStorage.setItem("name", "Shivaprasad");
// localStorage.setItem("age", "20");

// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));
var ErroLog = document.createElement("div");
ErroLog.setAttribute("class", "erroLog");

signup.addEventListener("click", function () {
  console.log(_name.value);
  var $userDetails = {};
  // "asdas" === "" || 5 > 4

  // if (_name.value.length === "" || _name.value.length < 4) {
  //   // _name.style.borderBottom = "1px solid red";
  //   alert("Name: Please Enter a valid Name!");
  //   ErroLog.innerText = "Name: Please Enter a valid Name!";
  //   _body.appendChild(ErroLog);
  //   return false;
  // } else if (_password.value.length === "" || _password.value.length < 5) {
  //   _name.style.borderBottom = "1px solid #fff";

  //   alert("Password: Please Enter minmum 6 chars !");
  //   ErroLog.innerText = "Password: Please Enter minmum 6 chars !";
  //   return false;
  // } else if (_email.value.indexOf("@") === -1) {
  //   alert("Email: Please Enter Correct Email !");
  //   return false;
  // } else if (_aadhar.value.length < 12) {
  //   alert("Aadhar: Please Enter Correct aadhar !");
  //   return false;
  // } else if (_contact.value.length < 10) {
  //   alert("Contact: Please Enter Correct Phone !");
  //   return false;
  // } else if (_vaccineName.value === "none") {
  //   alert("Vaccication: Please Choose a vaccication !");
  //   return false;
  // } else {
  $userDetails.name = _name.value;
  $userDetails.password = _password.value;
  $userDetails.email = _email.value;
  $userDetails.contact = _contact.value;
  $userDetails.vaccineName = _vaccineName.value;
  $userDetails.dose1 = _dose1.value;
  $userDetails.dose2 = _dose2.value;
  ErroLog.style.display = "none";
  resetForm(
    _name,
    _password,
    _email,
    _aadhar,
    _contact,
    _vaccineName,
    _dose1,
    _dose2
  );
  loginForm(_email, _aadhar, _contact, _vaccineName, _dose1, _dose2);
  // }

  if (
    localStorage.getItem("covidInfo") == null ||
    localStorage.getItem("covidInfo") == undefined
  ) {
    debugger;
    console.log($userDetails);
    console.log(userCollection);
    userCollection.push($userDetails);
    localStorage.setItem("covidInfo", JSON.stringify(userCollection));
  } else {
    var _getItems = JSON.parse(localStorage.getItem("covidInfo"));
    _getItems.push($userDetails);
    localStorage.setItem("covidInfo", JSON.stringify(_getItems));
    console.log(_getItems);
  }

  console.log(this);
  this.innerText = "Sign In";
  this.id = "siginin";

  var _siginin = document.getElementById("siginin");
  _siginin.onclick = function () {
    alert("Signed In...!");
  };
  // Web Storgae: local, session:

  // console.log(localStorage.getItem("covidInfo")[0]);

  // window.location.href = "../contact.html"; // to get ir set current location.
  // console.log(window.location.href);
});

function resetForm(
  name,
  password,
  email,
  aadhar,
  contact,
  vaccince,
  dose1,
  dose2
) {
  name.value = "";
  password.value = "";
  email.value = "";
  aadhar.value = "";
  contact.value = "";
  vaccince.value = "";
  dose1.value = "";
  dose2.value = "";
}

function loginForm(email, aadhar, contact, vaccine, dose1, dose2) {
  email.parentNode.style.display = "none";
  aadhar.parentNode.style.display = "none";
  contact.parentNode.style.display = "none";
  vaccine.parentNode.style.display = "none";

  // console.log(dose1.parentNode);
  dose1.parentNode.style.display = "none";
  dose2.parentNode.style.display = "none";
}
// localStorage.removeItem("covidInfo");

// console.log(JSON.parse(localStorage.getItem("covidInfo-1")));

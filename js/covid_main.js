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

localStorage.setItem("name", "Shivaprasad");
localStorage.setItem("age", "20");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
var ErroLog = document.createElement("div");
ErroLog.setAttribute("class", "erroLog");

signup.addEventListener("click", function () {
  console.log(_name.value);
  var $userDetails = {};
  // "asdas" === "" || 5 > 4

  if (_name.value.length === "" || _name.value.length < 4) {
    // _name.style.borderBottom = "1px solid red";
    alert("Name: Please Enter a valid Name!");
    ErroLog.innerText = "Name: Please Enter a valid Name!";
    _body.appendChild(ErroLog);
    return false;
  } else if (_password.value.length === "" || _password.value.length < 5) {
    _name.style.borderBottom = "1px solid #fff";

    alert("Password: Please Enter minmum 6 chars !");
    ErroLog.innerText = "Password: Please Enter minmum 6 chars !";
    return false;
  } else if (_email.value.indexOf("@") === -1) {
    alert("Email: Please Enter Correct Email !");
    return false;
  } else if (_aadhar.value.length < 12) {
    alert("Aadhar: Please Enter Correct aadhar !");
    return false;
  } else if (_contact.value.length < 10) {
    alert("Contact: Please Enter Correct Phone !");
    return false;
  } else if (_vaccineName.value === "none") {
    alert("Vaccication: Please Choose a vaccication !");
    return false;
  } else {
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
  }

  console.log($userDetails);

  userCollection.push($userDetails);
  console.log(userCollection);

  for (var i = 0; i < userCollection.length; i++) {
    console.log("<h1>" + userCollection[i].name + "</h1>");
  }

  // Web Storgae: local, session:

  localStorage.setItem("covidInfo-1", JSON.stringify(userCollection));

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
  email.style.display = "none";
  aadhar.style.display = "none";
  contact.style.display = "none";
  vaccine.style.display = "none";
  dose1.style.display = "none";
  dose2.style.display = "none";
}
// localStorage.removeItem("covidInfo");

console.log(JSON.parse(localStorage.getItem("covidInfo-1")));

var _name = document.getElementById("name"); // User Name
var _password = document.getElementById("password"); // Passwrod
var _email = document.getElementById("email"); // Email
var _aadhar = document.getElementById("aadhar"); // aadhar Number
var _contact = document.getElementById("contact"); // Contact Number
var _vaccineName = document.getElementById("vaccineName"); // Vaccince Name
var _dose1 = document.getElementById("dose1"); // dose - 1
var _dose2 = document.getElementById("dose2"); // dose - 2
var _main = document.getElementsByClassName("main")[0];
var _bindData = document.getElementsByClassName("BindData")[0];

_bindData.style.display = "none";
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
  loginForm(_email, _aadhar, _contact, _vaccineName, _dose1, _dose2, "none");
  // }

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

  var _signIn = document.createElement("button");
  _signIn.id = "signIn";
  _signIn.innerText = "Sign In";

  /* ----------------  task ------------------- */
  // replace Already Registered with, Not Registered yet? signUp
  /* ----------------  task ------------------- */

  this.parentNode.replaceChild(_signIn, this);

  _signIn.onclick = function () {
    // window.location.href = "../tasks/adminPage.html";
    _main.style.display = "none";
    _bindData.style.display = "block";

    var _EditAsAdmin = document.getElementsByClassName("Edit");
    var _SaveAsAdmin = document.getElementsByClassName("Save");
    var _DeleteAsAdmin = document.getElementsByClassName("Delete");

    for (var j = 0; j < _EditAsAdmin.length; j++) {
      _SaveAsAdmin[j].style.display = "none";
      _EditAsAdmin[j].onclick = function () {
        debugger;
        _SaveAsAdmin[0].style.display = "inline";
        var _editTR = this.parentNode.parentNode.children[1];
        var _editTrText = _editTR.innerText;

        // var editTrName = document.createElement("input");
        // editTrName.value = _editTrText;

        // console.log(editTrName);
        _editTR.innerHTML = "<input value='" + _editTrText + "'>";
        this.style.display = "none";

        _SaveAsAdmin[0].onclick = function () {
          _editTR.innerText = _editTR.children[0].value;
          _EditAsAdmin[0].style.display = "inline";
          this.style.display = "none";
        };
      };
    }
  };
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

function loginForm(email, aadhar, contact, vaccine, dose1, dose2, display) {
  // debugger;
  email.parentNode.style.display = display;
  aadhar.parentNode.style.display = display;
  contact.parentNode.style.display = display;
  vaccine.parentNode.style.display = display;
  dose1.parentNode.style.display = display;
  dose2.parentNode.style.display = display;
}
// localStorage.removeItem("covidInfo");

console.log(JSON.parse(localStorage.getItem("covidInfo-1")));

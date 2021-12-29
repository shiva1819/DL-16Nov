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
var _login = document.getElementById("login");
var _logout = document.getElementById("logout");

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
  var _stringRegEx = /^[a-zA-Z]+$/;
  var _emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  var _aahHarRegEx = /^[0-9]{12}/;
  var _contactRegEx = /^[0-9]{10}/;

  var $userDetails = {};
  // "asdas" === "" || 5 > 4
  console.log(_stringRegEx.test(_name.value));
  if (!_stringRegEx.test(_name.value)) {
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
  } else if (!_emailRegex.test(_email.value)) {
    alert("Email: Please Enter Correct Email !");
    return false;
  } else if (!_aahHarRegEx.test(_aadhar.value)) {
    alert("Aadhar: Please Enter Correct aadhar !");
    return false;
  } else if (!_contactRegEx.test(_contact.value)) {
    alert("Contact: Please Enter Correct Phone !");
    return false;
  } else if (_vaccineName.value === "none") {
    alert("Vaccication: Please Choose a vaccication !");
    return false;
  } else {
    $userDetails.name = _name.value;
    $userDetails.password = _password.value;
    $userDetails.email = _email.value;
    $userDetails.aadhar = _aadhar.value;
    $userDetails.contact = _contact.value;
    $userDetails.vaccineName = _vaccineName.value;

    if (_dose1.checked && _dose2.checked) {
      $userDetails.coverage = "Fully Vaccinated";
    } else if (_dose1.checked) {
      $userDetails.coverage = "Partially Vaccinated";
    } else if (!_dose1.checked && _dose2.checked) {
      $userDetails.coverage = "Invalid Vaccination";
    } else {
      $userDetails.coverage = "Not Vaccinated ";
    }
    // $userDetails.dose1 = _dose1.value;
    // $userDetails.dose2 = _dose2.value;
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

    // console.log($userDetails);

    // console.log(userCollection);

    if (localStorage.getItem("covidInfo") == null) {
      userCollection.push($userDetails);
      localStorage.setItem("covidInfo", JSON.stringify(userCollection));
    } else {
      var getLocalDataValues = JSON.parse(localStorage.getItem("covidInfo"));
      console.log(getLocalDataValues);
      getLocalDataValues.push($userDetails);
      console.log(getLocalDataValues);
      // debugger;
      localStorage.setItem("covidInfo", JSON.stringify(getLocalDataValues));
    }

    // covidInfo == "" || 0 || null
    // for (var i = 0; i < userCollection.length; i++) {
    //   console.log("<h1>" + userCollection[i].name + "</h1>");
    // }

    // Web Storgae: local, session:

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

      // var _EditAsAdmin = document.getElementsByClassName("Edit");
      // var _SaveAsAdmin = document.getElementsByClassName("Save");
      // var _DeleteAsAdmin = document.getElementsByClassName("Delete");

      // for (var j = 0; j < _EditAsAdmin.length; j++) {
      //   _SaveAsAdmin[j].style.display = "none";
      //   _EditAsAdmin[j].onclick = function () {
      //     debugger;
      //     _SaveAsAdmin[0].style.display = "inline";
      //     var _editTR = this.parentNode.parentNode.children[1];
      //     var _editTrText = _editTR.innerText;

      //     // var editTrName = document.createElement("input");
      //     // editTrName.value = _editTrText;

      //     // console.log(editTrName);
      //     _editTR.innerHTML = "<input value='" + _editTrText + "'>";
      //     this.style.display = "none";

      //     _SaveAsAdmin[0].onclick = function () {
      //       _editTR.innerText = _editTR.children[0].value;
      //       _EditAsAdmin[0].style.display = "inline";
      //       this.style.display = "none";
      //     };
      //   };
      // }

      if (_name.value == "admin" && _password.value == "admin") {
        document.getElementsByClassName("mainContent")[0].style.display =
          "block";
        document.getElementsByClassName("userAccount")[0].style.display =
          "none";
      } else {
        var userlocalData = localStorage.getItem("covidInfo");
        userlocalData = JSON.parse(userlocalData);
        console.log(userlocalData);
        var TR = "";
        userlocalData.forEach(function (v, i) {
          if (_name.value === v.name && _name.value !== "") {
            TR += "<tr><td> Name </td><td>" + v.name + "</td></tr>";
            TR += "<tr><td> Email </td><td>" + v.email + "</td></tr>";
            TR += "<tr><td> Aadhar No </td><td>" + v.aadhar + "</td></tr>";
            TR += "<tr><td> Contact </td><td>" + v.contact + "</td></tr>";
            TR +=
              "<tr><td> Vaccine Type </td><td>" + v.vaccineName + "</td></tr>";
            TR +=
              "<tr><td> Vaccine Coverage </td><td>" + v.coverage + "</td></tr>";
          }
        });
        console.log(TR);
        document.getElementById("BindDataFromLocalToTbody").innerHTML = TR;
        document.getElementsByClassName("mainContent")[0].style.display =
          "none";
        document.getElementsByClassName("userAccount")[0].style.display =
          "block";
      }
    };
  }
});

_login.onclick = function () {
  loginForm(_email, _aadhar, _contact, _vaccineName, _dose1, _dose2, "none");
  debugger;
  var _singupParentNode = this.parentNode.parentNode.children[0];
  // this.replaceChild(_singupParentNode, this);
  signup.style.display = "none";
  document.querySelector(".signin").style.display = "inline";

  document.querySelector(".signin").onclick = function () {
    _main.style.display = "none";
    _bindData.style.display = "block";
    var userlocalData = localStorage.getItem("covidInfo");
    userlocalData = JSON.parse(userlocalData);
    console.log(userlocalData);
    var _adminUserBindData = document.getElementById("adminUserBindData");
    if (_name.value == "admin" && _password.value == "admin") {
      // Admin Login
      var AdminTR = "";
      document.getElementsByClassName("mainContent")[0].style.display = "block";
      document.getElementsByClassName("userAccount")[0].style.display = "none";
      userlocalData.forEach(function (v, i) {
        AdminTR += "<tr>";
        AdminTR += "<td>" + v.name + "</td>";
        AdminTR += "<td>" + v.password + "</td>";
        AdminTR += "<td>" + v.email + "</td>";
        AdminTR += "<td>" + v.aadhar + "</td>";
        AdminTR += "<td>" + v.contact + "</td>";
        AdminTR += "<td>" + v.vaccineName + "</td>";
        AdminTR += "<td>" + v.coverage + "</td>";
        AdminTR += "<td data-id=" + i + ">";
        AdminTR += '<button type="button" class="Edit">Edit</button>';
        AdminTR +=
          '<button type="button" class="Save" style="display: none">Save</button>';
        AdminTR += '<button type="button" class="Delete">Delete</button>';
        AdminTR += "</td></tr>";
        _adminUserBindData.innerHTML = AdminTR;

        // EditBtn[0].onclick = function () {
        //   alert("edit");
        // };
        EditBtn = document.getElementsByClassName("Edit");
        SaveBtn = document.getElementsByClassName("Save");
        DeleBtn = document.getElementsByClassName("Delete");
        console.log(EditBtn);
        for (var k = 0; k < EditBtn.length; k++) {
          console.log(k);

          // DeleBtn[k].style.display = "inline";
          var TR_Name = "";
          EditBtn[k].onclick = function () {
            this.style.display = "none";
            this.parentNode.children[1].style.display = "inline";
            console.log(this.parentNode.parentNode.children[0]);
            TR_Name = this.parentNode.parentNode.children[0];
            TR_Name.innerHTML = "<input value=" + TR_Name.innerText + ">";

            console.log(TR_Name);
            debugger;
            // for (var x = 0; x < SaveBtn.length; x++) {
            //   SaveBtn[x].style.display = "inline";
            // }
          };

          SaveBtn[k].onclick = function () {
            this.style.display = "none";
            this.parentNode.children[0].style.display = "inline";
            TR_Name = this.parentNode.parentNode.children[0].children[0].value;
            this.parentNode.parentNode.children[0].innerText = TR_Name;
            var _dataIDAttr = this.parentNode.getAttribute("data-id");
            console.log((userlocalData[_dataIDAttr].name = TR_Name));
            var getLocalDataValues = JSON.parse(
              localStorage.getItem("covidInfo")
            );
            getLocalDataValues[_dataIDAttr].name = TR_Name;
            localStorage.setItem(
              "covidInfo",
              JSON.stringify(getLocalDataValues)
            );
          };

          DeleBtn[k].onclick = function () {
            this.parentNode.parentNode.parentNode.removeChild(
              this.parentNode.parentNode
            );

            var getLocalDataValues = JSON.parse(
              localStorage.getItem("covidInfo")
            );
            getLocalDataValues.splice(
              this.parentNode.getAttribute("data-id"),
              1
            );
            localStorage.setItem(
              "covidInfo",
              JSON.stringify(getLocalDataValues)
            );
          };
        }
      });
    } else {
      // User Login
      var TR = "";
      userlocalData.forEach(function (v, i) {
        if (_name.value === v.name && _name.value !== "") {
          TR += "<tr><td> Name </td><td>" + v.name + "</td></tr>";
          TR += "<tr><td> Email </td><td>" + v.email + "</td></tr>";
          TR += "<tr><td> Aadhar No </td><td>" + v.aadhar + "</td></tr>";
          TR += "<tr><td> Contact </td><td>" + v.contact + "</td></tr>";
          TR +=
            "<tr><td> Vaccine Type </td><td>" + v.vaccineName + "</td></tr>";
          TR +=
            "<tr><td> Vaccine Coverage </td><td>" + v.coverage + "</td></tr>";
        }
      });
      console.log(TR);
      document.getElementById("BindDataFromLocalToTbody").innerHTML = TR;
      document.getElementsByClassName("mainContent")[0].style.display = "none";
      document.getElementsByClassName("userAccount")[0].style.display = "block";
    }
  };
};
_logout.onclick = function () {
  window.location.reload();
};

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

// DOM - events:

//  Mouse    - mouseover, mouseout, click, dblclick, drag, rightclick,
//  Keyboard - anyKeyword,

var _btn = document.getElementById("btn");
var _main = document.getElementById("main");

// addEventListener,
// ele.addEventListener('eventName', callbackFunction, boolean[optional][captuting/bubbling]);
_btn.addEventListener(
  "dblclick",
  function () {
    alert("Added from JS!");
  },
  false
);

// ele.onClick = fn(){};

_main.onclick = function () {
  alert("Main Element!");
};

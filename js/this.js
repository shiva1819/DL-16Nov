// this

console.log(this);

var Obj = {
  name: "x",
  demo() {
    console.log(this);
    return this.name;
  },
};

function demo123() {
  console.log(this);
}

demo123();

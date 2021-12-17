// indexOf, lastIndexOf, search, trim

var str =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus, laborum dolores perspiciatis nesciunt molestiae consequuntur dicta tenetur repellat eos sapiente rem, Lorem totam non obcaecati tempore, laboriosam recusandae? Porro, nihil?";

var email = "            askjdhaksdh.com                ";
console.log(str.indexOf("Lorem"));
console.log(str.indexOf("Lorem", 178));
console.log(str.lastIndexOf("Lorem"));

console.log(str.search("Lorem"));

// email = email.trim();
console.log(email.trim());
console.log(email);

// if (!("dummy@gmail.com".indexOf("dummy") > -1)) {
//   alert("Thank you for registration!");
// } else {
//   alert("Please enter a valid email...");
// }

// substr, substring, slice

//  ---> 0111
// <---  72, -71,-70
var loremStr =
  "The Wright brothers – Orville (1871–1948) and Wilbur (1867–1912) – were American aviation pioneers generally credited with inventing, building, and flying the world's first successful motor-operated airplane.";

console.log(loremStr.indexOf("American"));

var lenOfStr = "American";

console.log(loremStr.substring(-72, 18));
console.log(
  loremStr.substring(
    loremStr.indexOf("American"),
    loremStr.indexOf("American") + lenOfStr.length
  )
  //  72, 80
);

// substr
console.log(loremStr.substr(loremStr.indexOf("American"), lenOfStr.length));
//  72, 8

// slice

console.log(loremStr.slice(0, 18));

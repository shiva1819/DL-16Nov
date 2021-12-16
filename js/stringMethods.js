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

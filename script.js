alert("WELCOME!");
let firstName;
firstName = prompt("what is your name");
console.log(firstName);
firstName = "Aleksandre";
let lastName;
lastName = prompt("what is your lastname");
console.log(lastName);
lastName = "Mdivani";
const fullName = firstName + " " + lastName;
let age = Number(prompt("what is your age"));
console.log(age);
age = 15;
console.log("i'm", fullName, "and i'm", age);
let userResponse = confirm("are you sure?");
if (userResponse) {
  alert("thanks for confirming");
}
let phoneNumber = null;
console.log(phoneNumber);
(phoneNumber = +995), 999, 999, 999;
let email;
console.log(email);
let isThursday = true;
let isWednesday = false;
if (isThursday === true) {
  console.log("lecture is today");
}
if (isWednesday === true) {
  console.log("lecture is tomorrow");
}

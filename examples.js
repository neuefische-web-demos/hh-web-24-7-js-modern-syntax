// named function inputs

function printUser(name, age, email) {
  console.log(
    `The user is called ${name}, is ${age} years old and can be contacted via ${email}.`
  );
}

printUser("Felix", 31, "test@test.de");
printUser(31, "Felix", "test@test.de");

// function printUserWithObjectInput(user) {
//   console.log(
//     `The user is called ${user.name}, is ${user.age} years old and can be contacted via ${user.email}.`
//   );
// }
function printUserWithObjectInput({ name, age, email }) {
  console.log(
    `The user is called ${name}, is ${age} years old and can be contacted via ${email}.`
  );
}

const userFelix = {
  email: "test@test.de",
  name: "Felix",
  age: 31,
};
printUserWithObjectInput({ name: "Max", age: 28, email: "max@neuefische.de" });
printUserWithObjectInput({ age: 28, email: "max@neuefische.de", name: "Max" });
printUserWithObjectInput(userFelix);

// Return multiple values

function brokenReturnTwoValues() {
  return "first";
  return "second"; //does not work
}

function returnTwoValues() {
  return ["first", "second"];
}

const values = returnTwoValues();
const [firstValue, secondValue] = returnTwoValues();

console.log(values);
console.log(firstValue);
console.log(secondValue);

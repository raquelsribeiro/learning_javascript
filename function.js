// Function chama um bloco de comando

function showName() {
  console.log("Raquel ..............................");
}
// calling the function
showName(); // Raquel

// function with parameters
function sum(num1, num2, name) {
  const result = num1 + num2;
  //                Raquel                   //19
  console.log(`Olá ${name} seu resultado é ${result}`);
  console.log("Olá " + name + " seu resultado é " + result);
  return result;
}
// calling the function
sum(7, 12, "Raquel"); // 19

function identifyAge(currentYear, yearBirth) {
  const result = currentYear - yearBirth;

  console.log(`Quantos anos você tem? seu resultado é ${result}`);
}
identifyAge(2020, 2001); //19

// arrow function
const displayName = () => {
  console.log("Raquel ...");
};
// calling the function
displayName(); // Raquel

// arrow function with parameters
const subtraction = (num1, num2) => {
  let result = num1 - num2;
  console.log(result);
};
// calling the function
subtraction(8, 5); // 13

// if your function has only one line it can be declared without keys
const division = (num1, num2) => console.log(num1 / num2);
// calling the function
division(8, 2); // 4

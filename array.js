// Array

// array is list

// declaring an array
//             0  1  2  3  4  5  6  7  8 => position
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//accessing an array
console.log(array[1]); // 2

const names = ["vitor", "Raquel", "Rafael", "Vitoria"];
console.log(names[4]);

// everything that can be declared in an array
const array2 = [
  "Vitor",
  15,
  15.5,
  ["teste"],
  { name: "vitor", age: 18 },
  function () {
    console.log("testing function");
  },
];
console.log(array2[2]); // 15.5
array2[5]();
console.log(array2[4]);

const compras = [
  { name: "arroz", value: 10, qtd: 2 },
  { name: "feijão", value: 3, qtd: 1 },
];

console.log(compras[1]);

// Object

// declaring object
// key:value
const person = {
  name: "Raquel",
  age: 18,
  rg: "125.652.365-58",
  cpf: "469.158.148-6",
  mom: "Eliana",
  dad: "Romulo",
  brothers: ["Emanuel", "Rafael"],
  pet: "cat",
};

// accessing object
console.log(person.name); // Raquel
console.log(person.age); // 18
console.log(person.brothers[1]); // Rafael

// declaring objects with functions
const car = {
  speed: () => {
    console.log("speeding up");
  },
  brake: () => {
    console.log("braking");
  },
};
// invoking the function
car.speed(); //  speeding up
car.brake(); // braking

// last example
const newCar = {
  name: "Gol g4",
  year: 2009,
  model: "Gol 1.0 Trend Total Flex 5p",
  brand: "Volkswagen",
  maximumAcceleration: 250,
  methods: {
    speed() {
      console.log("accelerate");
    },
    brake() {
      console.log("braking");
    },
  },
  lastOwners: ["Vitor", "Kleber", "Silvia"],
};
console.log(newCar.name); // Gol g4
console.log(newCar.year); // 2009
newCar.methods.speed(); // accelerate
newCar.methods.brake(); // braking
console.log(newCar.lastOwners[2]); // Silvia

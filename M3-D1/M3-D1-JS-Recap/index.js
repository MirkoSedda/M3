let hi = "Hello World";

if (true) {
  let hi = "Hey";
  console.log(hi);
}

console.log(hi);

// let teacherName = "Stefano";
// let teacherSurname = "Miceli";

// let teacherName2 = "Stefano";
// let teacherSurname2 = "Casasola";

const teacher = {
  name: "Stefano",
  surname: "Miceli",
  area: { country: "Italy", region: "FVG" },
  timezone: "Rome +1",
};

const myArr = [1, 2, 3, 4, { number: 5 }, [6, 7], "8", "9", "10"]; // MIXED TYPES, should be AVOIDED

console.log(teacher.skills);

teacher.skills = ["Front-end", "UX", "UI"];
console.log(teacher);

const abc = "sur";

// console.log(teacher[abc.concat("name")]);
console.log(teacher[abc + "name"]); // teacher["surname"]

const objKeys = Object.keys(teacher);
const objValues = Object.values(teacher);
const objEntries = Object.entries(teacher);

console.log(objKeys);
console.log(objValues);
console.log(objEntries);

console.log(teacher[objKeys[4]]); // teacher["skills"]
// const x = "lincence-plate";

// const car = {
//   brand: "Ford",
//   model: "Focus",
//   color: "Silver",
//   [x]: "GH1283",
// };

const car = {
  brand: "Ford",
  model: "Focus",
  color: "Silver",
  licensePlate: "GH1283",
  year: 2015,
};

// const car2 = car; // NOT HOW YOU COPY AN OBJ!!

const car2 = Object.assign({}, car, { color: "red", tires: "winter" }); // SHALLOW COPY

console.log(car);

delete car2.year;

console.log(car);
console.log(car2);

// const teacher2 = Object.assign({}, teacher); // SHALLOW COPY, DOESN'T CREATE A COPY MORE THAN 1 LEVEL DEEP (INNER OBJ or ARR DO NOT GET COPIED)
// JSON STRINGIFY + PARSE IS THE SHORTCUT FOR A DEEP CLONE ALGORITHM
const teacher2Stringified = JSON.stringify(teacher);
console.log(teacher2Stringified);

const teacher2 = JSON.parse(teacher2Stringified);
console.log(teacher2);

teacher2.timezone = "London 0";
teacher2.area.country = "UK";
teacher2.area.region = "Essex";

console.log(teacher);
console.log(teacher2);

const arrOfNumsAsStrings = ["1", "2a", "3", "4", "5"];

console.log(typeof arrOfNumsAsStrings[0]); //string
console.log(typeof Number(arrOfNumsAsStrings[0])); //number

console.log(Number(arrOfNumsAsStrings[0]) + parseInt(arrOfNumsAsStrings[3]));

console.log(typeof Number(arrOfNumsAsStrings[1])); // NaN is of type "number"
console.log(isNaN(Number(arrOfNumsAsStrings[1]))); // true

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);
console.log(Array.isArray(arrOfNumsAsStrings));
// console.log(arrOfNumsAsStrings.isArray()) // NOT POSSIBLE, IS ARRAY IS A METHOD ONTO THE CONSTRUCTOR "Array"

arrOfNumsAsStrings.push("6");
arrOfNumsAsStrings.shift();

arrOfNumsAsStrings.unshift("8");

console.log(arrOfNumsAsStrings.slice()); // SHALLOW COPY, DOESN'T MUTATE THE ORIGINAL ARRAY
console.log(arrOfNumsAsStrings.slice(0, 3)); // DOESN'T MUTATE THE ORIGINAL ARRAY, RETURNS A COPY WITH THE SELECTED ELEMENTS

console.log(arrOfNumsAsStrings);

console.log(arrOfNumsAsStrings.splice(0, 3)); // SELECTS A PORTION OF THE ARRAY AND MUTATES THE ORIGINAL AND RETURNS THE REMOVED ONES
console.log(arrOfNumsAsStrings.splice(0, 1, "37")); // CHANGES AN ELEMENT IN A SPECIFIC POSITION AND RETURNS THE REMOVED ONE
console.log(arrOfNumsAsStrings);

const expr = "Mangos";

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
    console.log("you got mangoes and....");
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// if (expr === "Papayas") {
//     console.log('Mangoes and papayas are $2.79 a pound.');
// } else if (expr === 'Oranges') {
//     console.log('Oranges are $0.59 a pound.');
// } else if (expr === "Mangoes") {
//     continue
// } else {
//     console.log(`Sorry, we are out of ${expr}.`);
// }

switch (car2.color) {
  case "Silver":
    console.log("probably the first car");
    break;

  case "Red":
    console.log("probably the second car");
    break;

  default:
    console.log("none of them found a match, the color was:", car2.color);
}

const movies = [
  {
    Name: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Name: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Name: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Name: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Name: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Name: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Name: "Lord of the Flies",
    Year: "1977",
    imdbID: "tt0100054",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Name: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Name: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Name: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Img: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
];

const validProps = Object.keys(movies[0]);

console.log(validProps);

const simplifiedArr = [];

for (let i = 0; i < movies.length; i++) {
  const currentElem = movies[i];

  //   const simplifiedObj = {
  //     Title: currentElem.Title,
  //     Picture: currentElem.Picture,
  //   };

  const simplifiedObj = {
    [validProps[0]]: currentElem[validProps[0]],
    [validProps[4]]: currentElem[validProps[4]],
  };

  simplifiedArr.push(simplifiedObj);
}

// FUNCTIONS

// NON-FRUITFUL FUNCTIONS (without return)
let result = 0;

function add1() {
  // a function that doesn't return is creating most likely a SIDE EFFECT elsewhere
  result++;
}

add1();
add1();
add1();
add1();
add1();
console.log(result);

console.log(add1());

// FRUITFUL (the ones that return a value)
function greet(x, y) {
  return "Hello " + y + x;
}
console.log(greet("!", "Julita")); // The position of the arguments matter! "x" will always be the first you pass and "y" will represent the second value you provide. It's up to you to maintain the correct order!

const hello = greet();
console.log(hello);

function double(num) {
  return num * 2;
}

console.log(`the result is: ${double(2) + 1}`);

console.log(double(4));

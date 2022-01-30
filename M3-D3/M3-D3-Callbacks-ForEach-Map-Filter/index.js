function hello() {
  return 'hello'
}
const hello2 = function () {
  return 'hello'
}

console.log(hello())
console.log(hello2())

const hello3 = () => {
  console.log()
  return 'hello'
}
const hello4 = () => 'hello4'

console.log(hello4())

// .then((response) => {
//     console.log(response)
//      response.json()
// })
// .then(undefined)

// .then((response) => {
//     console.log(response)
//     return response.json()
// })
// .then(data)

const sum = (n1, n2) => n1 + n2

const sumResult = sum(2, 2)

// const _sumResult = function(){ return sum(4,3)}
const _sumResult = () => sum(4, 3)

console.log(sumResult)
console.log(_sumResult())

const sayHi = (str, num) => {
  console.log('Hello ' + str + ' ' + num)
}

const sayBye = (str, num) => console.log(num + ' Byeeeee ' + str)

const somethingElse = (str, num) =>
  console.log(str + ' Whatever else ' + num + ' ')

const greet = (string, custumFunction) => {
  const random = Math.floor(Math.random() * 5)
  const withEnthusiasm = string + '!!!'

  custumFunction(withEnthusiasm, random) // sayHi(withEnthusiasm , num)
}

// greet("Mirko", sayHi); // (str) =>  return "Hello " + str
greet('Mirko', sayBye) // (str) =>  return "Hello " + str
greet('Mirko', somethingElse) // (str) =>  return "Hello " + str

const animals = [
  'cat',
  'dog',
  'mouse',
  'rabbit',
  'horse',
  'snake',
  'spider',
  'goldfish',
  'monkey',
]

const getAnimal = (arr, callback) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const selectedAnimal = arr[randomIndex]

  callback(selectedAnimal) // displayAnimal(selectedAnimal); (selectedAnimal) => displayAnimalWithName( selectedAnimal , "Roger"))
}

const displayAnimal = string => {
  console.log('I looked inside and found a ' + string)
}

const displayAnimalWithName = (animalType, name) => {
  console.log(
    'We found a ' + animalType + " and it's going to be called " + name
  )
}

getAnimal(animals, displayAnimal)
getAnimal(animals, displayAnimal)
getAnimal(animals, str => displayAnimalWithName(str, 'Roger'))
getAnimal(animals, animalFound => displayAnimalWithName(animalFound, 'Jim'))
getAnimal(animals, animalFound => displayAnimalWithName(animalFound, 'Tim'))
getAnimal(animals, animalFound => displayAnimalWithName(animalFound, 'Alan'))

// const handleEvent = event => {
//   /* handles event  */
// };

// div.addEventListener("click", handleEvent); // this is when your function only needs an event

// callback(event); // this is what's happening inside the event listener, it's calling whatever function you provide and passes the event object as an arguement
// that's why in the previous scenario handleEvent can expect an event as its one and only parameter

// const handleData = (event, customData) => {
/* handles event and customData */
// };

// when you need to pass some custom data to your function along with the event of the event listener, you might be tempted to expose the parenthesis
// const idxFound = 23; // outer variable
// div.addEventListener("click", handleData(event, idxFound)); // NOT ALLOWED, the function will run as soon as javascript reads it and will return undefined (.addEventListener("click", undefined))

//  this is how you properly do it:
// div.addEventListener("click", event => handleData(event, idxFound)); // pass a new outer function, required to delay the execution of handleData()
// it's the outer function that receives the event from the event listener, so you can pass it along to your inner function call as first parameter along with the custom data that you need

// ForEach

const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    callback(element)
  }
}

// forEach(animals, elem => console.log(elem));

animals.forEach(element => {
  console.log(element)
})

// MAP

const arrOfNum = [1, 23, 5, 76, 12, 0, 28999]

const map = (arr, callback) => {
  const mapped = []

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]

    mapped.push(callback(number))
  }

  return mapped
}

//   map(arrOfNum, (number) => number * 2  )

const resultMapped = arrOfNum.map(num => num * 4)
console.log(resultMapped)

const newList = arrOfNum.map(num => `<li>number is: ${num}</li>`)

console.log(newList.join(''))

const arrOfObjPeople = [
  { name: 'Giorgio', age: 18, kudos: 100 },
  { name: 'Mirko', age: 16, kudos: 50 },
  { name: 'Silvio', age: 12, kudos: 1000 },
  { name: 'Alberto', age: 62, kudos: 1 },
]

const arrOfAges = arrOfObjPeople.map(obj => obj.age)

console.log(arrOfAges)

// FILTER
const filter = (arr, callback) => {
  const filteredElements = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (callback(element)) {
      filteredElements.push(element)
    }
  }

  return filteredElements
}

// console.log(filter(arrOfObjPeople, obj => obj.age < 62));

const filteredPeople = arrOfObjPeople.filter(obj => obj.age < 18)

console.log(filteredPeople)

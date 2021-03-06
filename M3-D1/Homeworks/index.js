/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sum = (a, b) => (a === b ? (a + b) * 3 : a + b)
console.log(sum(1, 2))
console.log(sum(2, 2))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const fifty = (a, b) => (a === 50 || b === 50 || a + b === 50 ? true : false)
console.log(fifty(50, 1))
console.log(fifty(1, 50))
console.log(fifty(49, 1))
console.log(fifty(48, 1))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const removeChar = (str, pos) => str.substring(pos)

console.log(removeChar('$Strive', 1))

/* 4. Create a function to find and return the largest of three given integers. */

const largest = (a, b, c) => Math.max(a, b, c)

console.log(largest(1, 2, 3))

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

const inRange = (a, b) =>
  (a >= 40 && a <= 60) ||
  (b >= 40 && b <= 60) ||
  (a >= 70 && a <= 100) ||
  (b >= 70 && b <= 100)
    ? true
    : false

console.log(inRange(40, 61))
console.log(inRange(41, 60))
console.log(inRange(70, 101))
console.log(inRange(69, 100))
console.log(inRange(69, 101))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const strMultiplier = (str, num) => str.repeat(num)

console.log(strMultiplier('Strive', 3))

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const cityFinder = city =>
  city.startsWith('Los') || city.startsWith('New') ? true : false

console.log(cityFinder('LosAngeles'))
console.log(cityFinder('NewYork'))
console.log(cityFinder('YorkNew'))
console.log(cityFinder('York'))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

const arrSum = arr => (arr.length === 3 ? arr.reduce((a, b) => a + b) : null)

console.log(arrSum([1, 2, 3]))
console.log(arrSum([1]))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

const arrContains = arr => {
  if (arr.length === 2) {
    return arr.includes(1) || arr.includes(3) ? true : false
  }
}
console.log(arrContains([1, 0]))
console.log(arrContains([0, 3]))
console.log(arrContains([0, 2]))

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

const arrDoesNotContains = arr => {
  if (arr.length === 2) {
    return arr.includes(1) || arr.includes(3) ? false : true
  }
}
console.log(arrDoesNotContains([0, 2]))
console.log(arrDoesNotContains([2, 0]))
console.log(arrDoesNotContains([0, 1]))
console.log(arrDoesNotContains([3, 0]))

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

const longestString = arr => arr.sort((a, b) => b.length - a.length)[0]

console.log(longestString(['a', 'bb', 'ccc']))
console.log(longestString(['aaa', 'bb', 'c']))

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ??? between 0 and 90 degrees. Return `acute`.
    2. Right angle ??? 90 degree. Return `right`
    3. Obtuse angle ??? between 90 and 180. Return `obtuse`
    4. Straight angle ??? 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

const angleFinder = angle =>
  angle >= 0 && angle < 90
    ? 'acute'
    : angle === 90
    ? 'right'
    : angle >= 90 && angle <= 180
    ? 'obtuse'
    : angle > 180 && angle <= 360
    ? 'straight'
    : angle > 361
    ? 'wild card'
    : null

console.log(angleFinder(0))
console.log(angleFinder(90))
console.log(angleFinder(180))
console.log(angleFinder(181))
console.log(angleFinder(666))
/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

const indexFinder = arr => {
  let largest = arr[0]
  let index = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
      index = i
    }
  }
  return index
}

console.log(indexFinder([0, 1, 2]))
console.log(indexFinder([0, 1, 2, 3]))
console.log(indexFinder([0, 1, 2, 3, 4]))
console.log(indexFinder([0, 1, 2, 3, 4, 5]))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

const evenIndexFinder = arr => {
  let largest = arr[0]
  let index = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > largest) {
      largest = arr[i]
      index = i
    }
  }
  return index
}

console.log(evenIndexFinder([0, 1, 2]))
console.log(evenIndexFinder([0, 1, 2, 3, 4, 5]))
console.log(evenIndexFinder([0, 1, 2, 3, 4, 5, 6]))
console.log(evenIndexFinder([0, 1, 2, 3, 4, 5, 6, 7, 8]))

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

const lol = (num1, num2) =>
  (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0) ? true : false

console.log(lol(1, -1))
console.log(lol(-1, 1))
console.log(lol(1, 1))
console.log(lol(-1, -1))

/* 16. Create a function to create and return a new string where the first 7 characters are in lower case and the others are in upper case. 
    If the string's length is less than 7, convert the whole string into uppercase. Pass the original string as a parameter. */

const stringMess = str => {
  const subStr =
    str.substr(0, 7).toLowerCase() + str.substr(7, str.length).toUpperCase()
  return str.length < 7 ? str.toUpperCase() : subStr
}
console.log(stringMess('Strive'))
console.log(stringMess('StriveSchool'))

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

const sumInRange = (num1, num2) =>
  num1 + num2 >= 50 && num1 + num2 <= 80 ? 65 : 80

console.log(sumInRange(50, 30))
console.log(sumInRange(30, 50))
console.log(sumInRange(0))
console.log(sumInRange(1, 2))

/* 18. Create a function to convert a number (passed as a parameter) into a stringIf t 
    If the number has 3 as a factor ??? return `Diego`
    If the number has 5 as a factor ??? return `Riccardo`
    If the number has 7 as a factor ??? return `Stefano`
    If the number is not a modulo of the combo between 3, 5, and 7, return the original number. 
    One number can have more than one factor, in that case you should return both names. */

const namesFizzBuzz = num =>
  num % 7 === 0 && num % 5 === 0 && num % 3 === 0
    ? 'DiegoRiccardoStefano'
    : num % 7 === 0 && num % 5 === 0
    ? 'RiccardoStefano'
    : num % 7 === 0 && num % 3 === 0
    ? 'DiegoStefano'
    : num % 5 === 0 && num % 3 === 0
    ? 'DiegoRiccardo'
    : num % 7 === 0
    ? 'Stefano'
    : num % 5 === 0
    ? 'Riccardo'
    : num % 3 === 0
    ? 'Diego'
    : num
console.log(namesFizzBuzz(105))
console.log(namesFizzBuzz(35))
console.log(namesFizzBuzz(21))
console.log(namesFizzBuzz(15))
console.log(namesFizzBuzz(7))
console.log(namesFizzBuzz(5))
console.log(namesFizzBuzz(3))
console.log(namesFizzBuzz(1))

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

const acronym = str => {
  let arr = []
  const split = str.split(' ')

  for (let i = 0; i < split.length; i++) {
    arr.push(split[i][0])
  }
  return arr.join('').toUpperCase()
}

console.log(acronym('Strive School Inc.'))
console.log(acronym('British Broadcasting Corporation'))
console.log(acronym('Sorry to fool u'))

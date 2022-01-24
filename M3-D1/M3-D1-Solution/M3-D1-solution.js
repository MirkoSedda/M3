// 1) Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
function sum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  }
  return n1 + n2;
}
// console.log(sum(3, 3));

// 2) Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function numCheck(n1, n2) {
  return n1 === 50 || n2 === 50 || n1 + n2 === 50;
}
// console.log(numCheck(49, 1));

// 3) Create a function to remove a character at the specified position of a given string and return the new string.
function removeChar(str, pos) {
  return str.slice(0, pos - 1) + str.slice(pos);
}
// console.log(removeChar("strive!", 6));

// 4) Create a function to find the largest of three given integers.
function findLargest(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else if (n3 > n1 && n3 > n2) {
    return n3;
  }
}
// console.log(findLargest(3, 10, 5));

// or

// function findLargestAlt(n1, n2, n3) {
//   const array = [n1,n2,n3]
//   const sortedNums = array.sort(function (a,b) {return a - b})

//   return sortedNums[sortedNums.length - 1]
// }
// console.log(findLargestAlt(3, 10, 5));

// 5) Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function checkRange(n1, n2) {
  if (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) {
    return "range 40 ~ 60";
  } else if (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100) {
    return "range 70 ~ 100";
  } else {
    return "not in range";
  }
}
// console.log(checkRange(70, 80));

// 6) Create a function to create a new string of specified copies (positive number) of a given string.
const copyStr = (str, n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str + " ";
  }
  return newStr;
};
console.log(copyStr("strive", 3));

// or

// function copyStrAlt(str, n) {
//   let string = str + " ";
//   return string.repeat(n);
// }
// console.log(copyStrAlt("strive", 3));

// 7) Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
function isLosOrNew(str) {
  let first3Chars = str.slice(0, 3);

  if (
    first3Chars.toLowerCase() === "los" ||
    first3Chars.toLowerCase() === "new"
  ) {
    return str;
  } else {
    return "not Los, nor New. Try a different City";
  }
}
// console.log(isLosOrNew("New Camden Town"));

// or

// function isLosOrNewAlt(str) {
//   if(str.startsWith("Los") || str.startsWith("New")){
//     return str
//   } else {
//     return "not Los, nor New. Try a different City";
//   }
// };
// console.log(isLosOrNewAlt("New Camden Town"));

// 8) Create a function to calculate the sum of three elements of a given array of integers of length 3.
function calcSum(arr) {
  let accumulator = 0;

  for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }

  return accumulator;
}
// console.log(calcSum([3, 6, 18]));

// 9) Create a function to test whether an array of integers of length 2 contains 1 or a 3.
function includes1or3(arr) {
  let isNumFound = false;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number === 1 || number === 3) {
      isNumFound = true;
    }
  }

  return isNumFound;
}
// console.log(includes1or3([3, 1]));

// or

// function includes1or3Alt(arr) {
//   return arr.includes(1) || arr.includes(3);
// }
// console.log(includes1or3Alt([3, 1]));

// 10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
function isNot1or3(arr) {
  let isDifferent = true;
  if (arr.includes(1) || arr.includes(3)) {
    isDifferent = false;
  }

  return isDifferent;
}
// console.log(isNot1or3([1, 5]));

// or

// function isNot1or3Alt(arr) {

//   return !includes1or3(arr);
// }
// console.log(isNot1or3Alt([1, 5]));

// 11) Create a function to find the longest string from a given array of strings.
function findLargestStr(arr) {
  let prevLength = 0;
  let strFound = "";

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (prevLength < str.length) {
      prevLength = str.length;
      strFound = str;
    }
  }

  return strFound;
}
// console.log(findLargestStr(["strive school", "striveeeeee", "javascript"]));

// 12) Create a function to find the types of a given angle.

/* Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

function findAngleType(ang) {
  if (ang >= 0 && ang < 90) {
    return "Acute angle";
  } else if (ang === 90) {
    return "Right angle";
  } else if (ang > 90 && ang < 180) {
    return "Obtuse angle";
  } else if (ang === 180) {
    return "Straight angle";
  } else {
    return "angle not in range, choose a different one";
  }
}
// console.log(findAngleType(10));

// or

// function findAngleType(ang) {
//   switch (true) {
//     case ang >= 0 && ang < 90:
//       return "Acute angle";
//       break;
//     case ang === 90:
//       return "Right angle";
//       break;
//     case ang > 90 && ang < 180:
//       return "Obtuse angle";
//       break;
//     case ang === 180:
//       return "Straight angle";
//       break;
//     default:
//       return "angle not in range, choose a different one";
//       break;
//   }
// }
// console.log(findAngleTypeAlt(10));

// 13) Create a function to find the index of the greatest element of a given array of integers
function findLargeNumIndex(arr) {
  let maxFound = 0;
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (maxFound < currNum) {
      maxFound = currNum;
    }
  }

  const indexOfNumFound = arr.indexOf(maxFound);
  return indexOfNumFound;
}
// console.log(findLargeNumIndex([100, 9999, 849]));

// or

// function findLargeNumIndexAlt(arr) {
// return arr.indexOf(Math.max.apply(null, arr));
// };
// console.log(findLargeNumIndexAlt([100, 9999, 849]));

// 14) Create a function to get the largest even number from an array of integers.
function findLargeEven(arr) {
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      even.push(num);
    }
  }

  const largeNumIndex = findLargeNumIndex(arr);

  return even[largeNumIndex];

  //   return Math.max.apply(null, arr);
}
// console.log(findLargeEven([100, 4, 6, 7, 9]));

// 15) Create a function to check from two given integers, whether one is positive and another one is negative.
function positiveAndNegative(n1, n2) {
  return (n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0);
}
console.log(positiveAndNegative(-1, 3));

// 16) Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
function convertStr(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
  }
}
// console.log(convertStr("Strive school"));

// 17) Create a function to calculate the sum of the two given integers, if the sum is in the range 50..80 return 65 other wise return 80.
function is65or80(n1, n2) {
  let sum = n1 + n2;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}
// console.log(is65or80(24, 1));

// 18) Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

/*
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

function numToStringByFactor(num) {
  let str = "";

  if (num % 3 !== 0 && num % 7 !== 0 && num % 5 !== 0) return num;

  if (num % 3 === 0) str += "Diego";
  if (num % 5 === 0) str += "Riccardo";
  if (num % 7 === 0) str += "Stefano";
  return str;
}
// console.log(numToStringByFactor(34));

// 19) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
function getAcronym(str) {
  let newStrArr = [];
  let splitted = str.split(" ");

  for (let i = 0; i < splitted.length; i++) {
    const letter = splitted[i];
    newStrArr.push(letter.charAt(0).toUpperCase());
  }

  return newStrArr.join("");
}

console.log(getAcronym("British Broadcasting Corporation"));

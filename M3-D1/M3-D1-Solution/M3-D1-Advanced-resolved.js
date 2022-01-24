/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

function maxChar(str) {
  let maxLength = 0;
  let maxChar = "";
  
  let strArr = str.split("")

  for (let i = 0; i < strArr.length; i++) {
      let currChar = strArr[i]
      let currLength = str.split(currChar).length

      if(currLength > maxLength){
          maxLength = currLength
          maxChar = currChar
      }

  }
  return maxChar
};

// console.log("MAXCHAR", maxChar("apple 1231111"));

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

function isAnagram(str1, str2) {
  return (
    str1.split("").sort().join() === str2.split("").sort().join()
  );
};

// console.log(isAnagram("RAIL! SAFETY!", "fairy tales"));
/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

function getAnagramFromList(str, arr) {
  const anagramsFound = [];

  for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      if (isAnagram(str, word)) {
          anagramsFound.push(word);
        }
  }
  
  return anagramsFound;
};

// console.log(getAnagramFromList("listen", ["inlets", "google", "enlist", "banana"]))

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

function isPalindrome(str) {
  return (
    str.toLowerCase().split("").reverse().join() ===
    str.toLowerCase().split("").join()
  );
};

// console.log(isPalindrome(" ,abba, "));

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

let reverseInt = (n) => {
  let str = n.toString();
  if (str.charAt(0) === "-") {
    return parseFloat(
      "-" + str.substr(1, str.length).split("").reverse().join("")
    );
  }
  return parseFloat(str.split("").reverse().join(""));
};

console.log(reverseInt(-501));

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

function drawSteps(n){
  let char = "#";
  let space = " ";
  for (let i = 1; i < n + 1; i++) {
    console.log(char.repeat(i) + space.repeat(n - i));
  }
};

// drawSteps(5);

// function drawStepsAlt(n) {
//   for (let i = 0; i < n; i++) {
//     let step = "";

//     for (let j = 0; j < i + 1; j++) {
//         step += "#";
//     }
//     return step;
//   }
// };
// drawStepsAlt(8);

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'elppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
  return str.split("").reverse().join("");
};

console.log(reverse("Greetings!"));

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

function chunkify(arr, chunkSize) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    console.log(i + chunkSize);
    newArr.push(arr.slice(i, i + chunkSize));
  }
  return newArr;
};

console.log(chunkify([1, 2, 3, 4, 5, 6, 7, 8], 3));

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

function pyramid(n) {
  let space = " ";
  let char = "#";
  for (let i = 0; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      console.log(
        space.repeat(n - j) + char.repeat(j * 2 - 1) + space.repeat(n - j),
        "|"
      );
    }
    console.log("step", i + 1);
  }
}
pyramid(6);

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
};
console.log(matrix(4));

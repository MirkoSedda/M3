/* 1. Given a string (as a parameter), return the character that is most commonly used. */

const mostCommonChar = str => {
  let max = 0
  let maxChar = ''
  str.split('').forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length
      maxChar = char
    }
  })
  return { maxChar, max }
}

console.log(mostCommonChar('Strive school is awesome!'))

/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */

const anagram = (str1, str2) => {
  const res1 = str1.toLowerCase().split('').sort().join('')
  const res2 = str2.toLowerCase().split('').sort().join('')
  console.log(res1)
  console.log(res2)
  return res1 === res2 ? true : false
}
console.log(anagram('strive', 'strevi'))
console.log(anagram('earth', 'heart'))
console.log(anagram('peach', 'cheap'))
console.log(anagram('sad', 'sadd'))

const sort = arr => arr.sort((a, b) => b - a)
console.log(sort([5, 1, 3, 2, 4]))

let numbers = [4, 2, 5, 1, 3]
numbers.sort((a, b) => a - b)
console.log(numbers)

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */

const palindrome = str => {
  return str === str.split('').reverse().join('')
}
console.log(palindrome('level'))
console.log(palindrome('civic'))
console.log(palindrome('boob'))
console.log(palindrome('mirko'))

// const palindrome = str => {
//   const result = Math.floor(str.length/2)
//   let x = 0
//     for (let i = 1; i < (str.length / 2); i++) {
//         console.log(str.charAt(i));
//         console.log(str.charAt(str.length - i))
//         if (str.charAt(i) === str.charAt(str.length - i)) {

//         }
//     }
// }
// console.log(palindrome('level'))

// const palindrome = str => {
//   for (let i = 1; i < str.length + 1; i++) {
//     console.log(str.charAt(str.length - i))
//     if (str.charAt(i) === str.charAt(str.length - i)) {
//       continue
//     } else {
//       return false
//     }
//   }
// }

// const palindrome = str => {
//     for (let i = 0; i < str.length; i++) {
//       let lastChar = str.charAt(str.length - i - 1)
//     }

// }
// for (let i = 0; i < str.length; i++) {
//     let lastChar = str.charAt(str.length - i - 1)

// }
// let i = 0
// let lastChar = str.charAt(str.length - 1)
// console.log(lastChar)

// do {
//   i = i + 1
// } while (str.charAt(i) === str.charAt(str.length - i))
// {
//   return (whatIs = true)
// }

// console.log(result)
// expected result: "12345"

/* 5. Given an integer (as parameter), return an integer which digits are the same as the original number, but reversed.
    Ex: 189 ⇒ 981 */

const reverse = num => String(num).split('').reverse().join('')

console.log(reverse(174))
console.log(reverse(397))
console.log(reverse(547))

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/

/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" ⇒ "olleh" */

const reverseStr = str => str.toLowerCase().split('').reverse().join('')

console.log(reverseStr('cmonnnn'))

/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 → [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 → [[ 1, 2, 3, 4], [5]]
*/

/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/

/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/

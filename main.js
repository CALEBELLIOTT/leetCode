// Area to solve leetcode problems in a normal environment

// SECTION leetcode 1 - 2 sum

// addTwoNumbers([2, 0, 5], [3, 8, 5])





// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



// NOTE this is functional, but can be improved with a Hashmap solution
// TODO improve this with a hashmap

function twoSum(nums, target) {
  let done = false
  let indexes = []
  nums.forEach(function (n, i) {
    nums.forEach(function (n2, i2) {
      if (n + n2 == target && i != i2 && !done) {
        indexes.push(i)
        indexes.push(i2)
        done = true
        return
      }
      if (done) {
        return
      }
    })
    if (done) {
      return
    }
  })
  return indexes
}

function twoSumHashMap(nums, target) {
  let map = {}
  let solution = []
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    let otherNum = target - element
    if (map[otherNum]) {
      solution = [i, map[otherNum]]
      solution.push(i)
      solution.push(map[otherNum])
      return
    } else {
      map[element] = i
    }
    // if (solution[1]) {
    //   return
    // }
  }
  return solution
}

// console.log(twoSumHashMap([1, 4, 2, 3, 8, 9], 6))

// console.log(twoSum([5, 3, 2, 5, 1,], 8));

// !SECTION






// SECTION leetCode 2 - add two numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


function addTwoNumbers(l1, l2) {
  l1 = parseInt(l1.reverse().join(''))
  l2 = parseInt(l2.reverse().join(''))
  let sum = l1 + l2
  sum = Array.from(sum.toString()).map(Number).reverse()
  return sum
}

// console.log(addTwoNumbers([7, 0, 2], [9, 4, 3]))



// SECTION leetCode 9 - Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverse = parseInt(x.toString().split('').reverse().join(''))
  console.log(reverse);
  if (x == reverse) {
    return true
  } return false
};

// console.log(isPalindrome(121));


// SECTION leetCode 13 - Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let total = 0
  let array = s.split('')
  console.log(array);
  let library = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    const nextLetter = array[i + 1]
    if ((letter == "I" || "X" || "C") && i < array.length - 1) {
      let twoCombo = [letter, nextLetter].join('')
      if (library[twoCombo]) {
        total += library[twoCombo]
        i++
      }
      else {
        total += library[letter]
      }
    } else {
      total += library[letter]
    }
  }
  return total
}

function romanToIntBetter(s) {
  let array = s.split('')
  let total = 0
  let library = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (library[element] < library[array[i + 1]]) {
      total -= library[element]
    } else {
      total += library[element]
    }
  }
  return total
}

// console.log(romanToIntBetter("MMMXLV"));
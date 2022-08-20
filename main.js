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

console.log(addTwoNumbers([7, 0, 2], [9, 4, 3]))



// SECTION
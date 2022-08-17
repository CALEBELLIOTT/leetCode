// Area to solve leetcode problems in a normal environment

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



//  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

//  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (l1, l2) {
  let reversed = l1.reverse()
  reversed = reversed.join("")
  let reversed2 = l2.reverse()
  reversed2 = parseInt(reversed2.join(""))
  let total = reversed + reversed2
  console.log(total);
  total = total.split("")
  console.log(total);

};

addTwoNumbers([2, 0, 5], [3, 8, 5])
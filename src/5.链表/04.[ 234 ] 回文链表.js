/**
 * * 题目名称：回文链表
 * * 题目地址：https://leetcode-cn.com/problems/palindrome-linked-list
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

// * 思路：栈

var isPalindrome = function (head) {
  if (!head) return true
  const queue = []
  let cur = head
  while (cur) {
    queue.push(cur.val)
    cur = cur.next
  }
  while (queue.length >= 1) {
    if (queue.shift() !== queue.pop()) return false
  }
  return true
};

// 测试用例
let test = ""

console.time("执行用时")
console.log(xxx(test))
console.timeEnd("执行用时")

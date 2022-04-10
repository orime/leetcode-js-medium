/**
 * * 题目名称：两个数组的交集
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-arrays
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 
 */

// * 思路：1、先分别去重；2、哈希表降低时间复杂度

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];
  const res = [];
  const obj = {};
  for (let v of nums1) {
    if (!obj[v]) obj[v] = 'abc';
  }

  for (let v of nums2) {
    if (obj[v] && !res.includes(v)) {
      res.push(v);
    }
  }
  return res;
};

/**
 * * 思路二：巧用集合
 * @param {Array(number)} nums1
 * @param {Array(number)} nums2
 * @returns
 */
const intersection1 = (nums1, nums2) => {
  const resSet = new Set(nums1);
  const res = [];
  for (let v of nums2) {
    if (resSet.has(v)) {
      res.push(v);
      resSet.delete(v);
    }
  }
  return res;
};

// 测试用例
let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

console.time("执行用时");
console.log(intersection(nums1, nums2));
console.timeEnd("执行用时");

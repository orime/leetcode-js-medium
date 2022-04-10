/**
 * * 题目名称：统计有序矩阵中的负数
 * * 题目地址：https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix
 * 
 * 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 

请你统计并返回 grid 中 负数 的数目。

示例 1：

输入：grid = [
  [4,3,2,-1],
  [3,2,1,-1],
  [1,1,-1,-2],
  [-1,-1,-2,-3]
]
输出：8
解释：矩阵中共有 8 个负数。
示例 2：

输入：grid = [[3,2],[1,0]]
输出：0
示例 3：

输入：grid = [[1,-1],[-1,-1]]
输出：3
示例 4：

输入：grid = [[-1]]
输出：1
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100

 */

// * 思路：只要第一行中的第i列出现负数，(m-i)*n 都是负数
// *
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const m = grid.length;
  if (m === 0) return 0;
  const n = grid[0].length;
  if (n === 0) return 0;
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    const firstNegativeIndex = row.findIndex((r) => r < 0);
    if (firstNegativeIndex === -1) continue;
    let c = n - firstNegativeIndex;
    count += c;
  }
  return count;
};
// 测试用例
let test = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

let test1 = [
  [3, 2],
  [1, 0],
];

let test2 = [
  [1, -1],
  [-1, -1],
];

console.time("执行用时");
console.log(countNegatives(test));
console.log(countNegatives(test1));
console.log(countNegatives(test2));
console.timeEnd("执行用时");

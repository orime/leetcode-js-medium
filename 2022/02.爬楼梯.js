/**
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// * 爬到最后两节台阶的方案：1、爬两个1；   2、爬一个2；

const memory = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  if (memory[n]) {
    return memory[n];
  }
  const res = climbStairs(n - 1) + climbStairs(n - 2);
  memory[n] = res;
  return res;
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));

/**
 * @param {number} n
 * @return {number}
 *  * 动态规划解法：数组塞值
 */
var climbStairs1 = function (n) {
  if (n <= 2) return n;
  const arr = new Array();
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

console.log(climbStairs1(1));
console.log(climbStairs1(2));
console.log(climbStairs1(3));
console.log(climbStairs1(4));

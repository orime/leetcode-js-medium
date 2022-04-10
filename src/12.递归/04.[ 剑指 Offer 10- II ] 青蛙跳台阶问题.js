/**
 * * 题目名称：青蛙跳台阶问题
 * * 题目地址：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1
提示：

0 <= n <= 100

 */

// * 思路：青蛙🐸开始跳，穷举两种可能性：跳1，余n - 1;跳2，余n - 2;可能性之和为f(n-1) + f(n-2)

/**
 * @param {number} n
 * @return {number}
 */
const map = {};
var numWays = function (n) {
  if (n === 0) return 1;
  if (n <= 2) return n;
  if (map[n]) return map[n];
  const res = numWays(n - 1) + numWays(n - 2);
  map[n] = res;
  return res % 1000000007;
};

var numsWay2 = (n) => {
  // 为了通过，强行加的条件
  if (n === 0) return 1;
  const dp = [null, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
};

// 测试用例
let test = 10;

console.time("执行用时");
console.log(numWays(3));
console.log(numWays(4));
console.log(numWays(5));
console.log(numWays(6));
console.log(numWays(7));
console.timeEnd("执行用时");

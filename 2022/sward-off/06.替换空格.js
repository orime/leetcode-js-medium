/**
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
 

限制：

0 <= s 的长度 <= 10000



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.replace(/\x20/g, "%20");
};

// * 解法二：数组循环并 continue

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace1 = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      res += "%20";
      continue;
    }
    res += s[i];
  }
  return res;
};

// * 解法三：js 数组的 split 方法

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace2 = function (s) {
  return s.split(" ").join("%20");
};

const test = "We are happy.";

console.log(replaceSpace2(test));

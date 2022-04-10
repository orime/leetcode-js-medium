/**
 * * 题目名称：罗马数字转整数
 * * 题目地址：https://leetcode-cn.com/problems/roman-to-integer
罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:

输入: "III"
输出: 3
示例 2:

输入: "IV"
输出: 4
示例 3:

输入: "IX"
输出: 9
示例 4:

输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
示例 5:

输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.

 */

// * 思路：现将字符串拆成单个序列，再相加，所谓单个序列，单个罗马字符或组合罗马字符

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {

  }
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    switch (char) {
      case 'I':
        if (s[i + 1] === 'V') {
          // * 下一个是 V
          count += 4
          i++
        } else if (s[i + 1] === 'X') {
          count += 9
          i++
        } else {
          count += 1
        }
        break;

      case 'X':
        if (s[i + 1] === 'L') {
          count += 40
          i++
        } else if (s[i + 1] === 'C') {
          count += 90
          i++
        } else {
          count += 10
        }
        break;

      case 'C':
        if (s[i + 1] === 'D') {
          count += 400
          i++
        } else if (s[i + 1] === 'M') {
          count += 900
          i++
        } else {
          count += 100
        }
        break;
      case 'V':
        count += 5
        break
      case 'L':
        count += 50
        break
      case 'D':
        count += 500
        break
      case 'M':
        count += 1000
        break

      default:
        break;
    }
  }
  return count
};

// * 解法二：用map替代switch，但是性能降低

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt1 = function (s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 50,
    L: 50,
    XC: 90,
    C: 100,
    CD: 500,
    D: 500,
    CM: 900,
    M: 1000,
  }
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if(map[s.substr(i, 2)]){
      count += map[s.substr(i, 2)]
      i++
    } else {
      count += map[s.substr(i, 1)]
    }
  }
  return count
};

// 测试用例
let test = "LVIII"
let test1 = "III"

console.time('执行用时');
console.log(romanToInt1(test));
console.log(romanToInt1(test1));
console.timeEnd('执行用时');

console.time('执行用时');
console.log(romanToInt(test));
console.log(romanToInt(test1));
console.timeEnd('执行用时');
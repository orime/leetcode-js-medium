/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。

 */

// * 思路：

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    function genRes(str) {
      const res = []
      for(let i = 0; i < str.length; i++){
        const char = str[i]
        if(char === '#'){
          if(res.length){
            res.pop()
          }
        } else {
          res.push(char)
        }
      }
      return res.join('')
    }
    return genRes(S) === genRes(T)
};

// 测试用例
let S = "ab##", T = "c#d#"

console.time('执行用时');
console.log(backspaceCompare(S, T));
console.timeEnd('执行用时');
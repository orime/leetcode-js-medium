/**
给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 

示例 1：

输入：nums = [1,2,2,3,1]
输出：2
解释：
输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
连续子数组里面拥有相同度的有如下所示：
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
示例 2：

输入：nums = [1,2,2,3,1,4,2]
输出：6
解释：
数组的度是 3 ，因为元素 2 重复出现 3 次。
所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/degree-of-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// * 1、找到出现频次最高的元素；2、找到元素开始和结束的位置；

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // * 对于数组中的每个值记录开始位置、结束位置
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!obj[value]) {
      obj[value] = { start: i, end: i, length: 1, count: 1 };
    } else {
      obj[value] = {
        ...obj[value],
        end: i,
        length: i - obj[value].start + 1,
        count: obj[value].count + 1,
      };
    }
  }
  console.log(obj);
  let minLength = Infinity;
  let maxCount = 0;
  for (let key in obj) {
    const targetCount = obj[key].count;
    const targetLength = obj[key].length;

    if (targetCount === maxCount) {
      maxCount = targetCount;
      if (targetLength <= minLength) {
        minLength = targetLength;
      }
    } else if (targetCount > maxCount) {
      maxCount = targetCount;
      minLength = targetLength;
    }
  }
  return minLength;
};

const test = [1, 2, 2, 3, 1];
const test1 = [1, 2, 2, 3, 1, 4, 2];
const test2 = [1, 3, 2, 2, 3, 1];

console.log(findShortestSubArray(test1));

/**
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  

注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

 

示例 1：

输入：numbers = [3,4,5,1,2]
输出：1
示例 2：

输入：numbers = [2,2,2,0,1]
输出：0
 



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// * 首先判断最前面的一个数字，假设其为最小值；判断末尾是否比它小

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    const middle = start + Math.floor((end - start) / 2);
    if (numbers[middle] < numbers[end]) {
      end = middle;
    } else if (numbers[middle] > numbers[end]) {
      start = middle + 1;
    } else {
      end--;
    }
  }
  return numbers[start];
};

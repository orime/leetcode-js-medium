/**
 * * 题目名称：二叉搜索树的范围和
 * * 题目地址：https://leetcode-cn.com/problems/range-sum-of-bst
给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

 

示例 1：


输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
示例 2：


输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23

 */

// * 思路：题目意思是算出给定区间内所有节点和

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * * 广度遍历 { val: xx, left: {val: yy, left: xxx, right: xx}, right: {val: zz, left: cc, right: dd} }
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) return 0;
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }
  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
};

// 测试用例
let test = "";

console.time("执行用时");
// console.log(xxx(test));
console.timeEnd("执行用时");

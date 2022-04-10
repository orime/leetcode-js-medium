/**
 * * 题目名称：平衡二叉树
 * * 题目地址：https://leetcode-cn.com/problems/balanced-binary-tree
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true
示例 2：


输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
示例 3：

输入：root = []
输出：true
 */

// * 思路：计算每一个节点的左右深度，求绝对值

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  function maxDep(node) {
    if(!node) return 0;
    return Math.max(maxDep(node.left), maxDep(node.right)) + 1;
  }
  if(!root) {
    return true
  }
  return (Math.abs(maxDep(root.left, root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right);
};

// 测试用例
let test = ''

console.time('执行用时');
// console.log(xxx(test));
console.timeEnd('执行用时');
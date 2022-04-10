/**
 * * 题目名称：二叉树的最大深度
 * * 题目地址：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

 */

// * 思路：分别计算每个分叉节点的最大深度，取最大值，不要忘记层数+1

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
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) {
    return 0;
  }
  if(!root.left && !root.right) {
    return 1;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};



// 测试用例
let test = {
  val: 1,
  left: {
    val: 1,
  },
  right: {
    val: 1,
    left: {
      val: 1,
    },
    right: {
      val: 1,
      left: {
        val: 1,
      },
      right: {
        val: 1
      }
    }
  }
}

console.time('执行用时');
console.log(maxDepth(test));
console.timeEnd('执行用时');
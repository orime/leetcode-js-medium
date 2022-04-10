/**
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]
 



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// * 二叉树的层序遍历

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let list = [root];
  const result = [];
  while (list.length) {
    const currentList = [];
    for (let item of list) {
      result.push(item.val);
      item.left && currentList.push(item.left);
      item.right && currentList.push(item.right);
    }
    list = currentList;
  }
  return result;
};

// * 方法二：shift 和 pop 思路
const levelOrder2 = function (root) {
  const queue = root ? [root] : [];
  const res = [];
  while (queue.length) {
    const top = queue.shift();
    res.push(top.val);
    top.left && queue.push(top.left);
    top.right && queue.push(top.right);
  }
  return res;
};

/**
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

 

示例 1：



输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
示例 2：



输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
示例 3：



输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
示例 4：

输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

// * 构造链表，先有一个 head；先复制链表，再依次加入 random

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // * 非空判定
  if (!head) return head;
  // * 借助 map 存储新链表结构
  const map = new WeakMap();
  let node = head;
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }
  // * 从 map 中重新组织数据结构
  node = head;
  while (node) {
    map.get(node).next = map.get(node.next) || null;
    map.get(node).random = map.get(node.random) || null;
    node = node.next;
  }
  return map.get(head);
};

/**
* 拆分链表

var copyRandomList = function (head) {
  if (head == null) return null;
  // cur指向头节点
  let cur = head;
  // 复制各节点，并构建拼接链表
  while (cur) {
    // 复制cur节点并且next正确指向之后  再延着next指针走下去
    let temp = new Node(cur.val);
    temp.next = cur.next;
    cur.next = temp;
    cur = temp.next;
  }
  cur = head;
  // 构建各新节点的 random 指向
  while (cur) {
    if (cur.random) cur.next.random = cur.random.next;
    cur = cur.next.next;
  }
  // 拆分两链表;
  cur = head.next;
  let pre = head,
    res = head.next;
  while (cur.next) {
    pre.next = pre.next.next;
    cur.next = cur.next.next;
    pre = pre.next;
    cur = cur.next;
  }
  // 单独处理原链表尾节点
  pre.next = null;
  // 返回新链表头节点
  return res;
};

作者：angela-x
链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/jie-ti-bu-zou-zhi-you-3bu-zhu-shi-xiang-oymub/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

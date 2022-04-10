/**
剑指 Offer 09. 用两个栈实现队列
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用

*/

// * 栈的特点：先进后出，只有 push 和 pop
// * 主栈先进后出；辅助栈在每次 delete 的时候重置元素顺序

var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) {
    // * 如果此前做过主栈的倒腾，现在的 stack2 就是 head 元素有序排列的
    return this.stack2.pop();
  } else {
    // * 如果 stack2 已经空了，就需要重新确认 head 顺序了；
    while (this.stack1.length) {
      // * 如果主栈不为空，则将元素全都 pop 到 stack2 中；
      this.stack2.push(this.stack1.pop());
    }
    if (this.stack2.length) {
      return this.stack2.pop();
    } else {
      return -1;
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

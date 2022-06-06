var MinStack = function () {
  this.stack = [];
  this.backup = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  while (this.stack.length > 1) {
    this.backup.push(this.stack.shift());
  }
  this.stack.pop();
  while (this.backup.length > 0) {
    this.stack.push(this.backup.shift());
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length === 0 ? null : this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

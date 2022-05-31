var MyStack = function () {
  this.queue = [];
  this.backup = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    this.backup.push(this.queue.shift());
  }

  while (this.backup.length > 0) {
    this.queue.push(this.backup.shift());
  }
  return this.queue.length > 0 ? this.queue.shift() : null;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue.length > 0) {
    this.backup.push(this.queue.shift());
  }
  while (this.backup.length > 0) {
    this.queue.push(this.backup.shift());
  }
  return this.queue.length > 0 ? this.queue[this.queue.length - 1] : null;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0 && this.backup.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

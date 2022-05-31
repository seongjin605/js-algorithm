var MyQueue = function () {
  this.stack = [];
  this.backup = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack.length > 1) {
    this.backup.push(this.stack.pop());
  }

  const last = this.stack.pop();

  while (this.backup.length > 0) {
    this.stack.push(this.backup.pop());
  }
  return last;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack.length > 1) {
    this.backup.push(this.stack.pop());
  }

  const last = this.stack.pop();
  this.stack.push(last);

  while (this.backup.length > 0) {
    this.stack.push(this.backup.pop());
  }
  return last;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0 && this.backup.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var MyStack = function () {
  this.in = [];
  this.out = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.in.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  this.top();
  return this.out.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.in.length > 0) {
    this.out.push(this.in.shift());
  }
  return this.out.slice(-1);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.in.length === 0 && this.out.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

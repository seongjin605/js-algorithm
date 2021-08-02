
/**
 * Initialize your data structure here.
 */
 var MyStack = function() {
    this.queue = [];
    this.tmp = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.queue.length > 1) {
        this.tmp.push(this.queue.shift());
    }
    
    const last = this.queue.shift();
    this.queue = this.tmp;
    this.tmp = [];
    return last;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.queue.length > 1){
        this.tmp.push(this.queue.shift());
    }
    var lastElement = this.queue.shift();
    this.tmp.push(lastElement);
    this.queue = this.tmp;
    this.tmp = [];
    return lastElement;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);

console.log(obj.pop());
console.log(obj.top());
console.log(obj.empty());
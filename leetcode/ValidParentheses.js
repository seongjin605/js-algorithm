/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  return isValidParentheses(s);
};

function isValidParentheses(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const target = s.charAt(i);
    switch (target) {
      case '(': {
        stack.push(')');
        break;
      }
      case '{': {
        stack.push('}');
        break;
      }
      case '[': {
        stack.push(']');
        break;
      }
      default: {
        if (target !== stack.pop()) {
          return false;
        }
        break;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true

/**
 * https://programmers.co.kr/learn/courses/30/lessons/60058#
 *
 * @param {*} p
 */
function solution(p) {
  if (!p || p.length === 0) return;

  const brackets = p;
  const stack = [];
  const reuslt = [];
  let isValid = false;

  for (let i = 0; i < brackets.length; i++) {
    const current = brackets.charAt(i);
    console.log('current:', current);
    switch (current) {
      case '(': {
        stack.push(')');
        break;
      }
      default: {
        reuslt.push('(');
        // current )
        // 스택에 들어간 값이 current랑 같으면 균형잡힌 괄호
        if (current !== stack.slice(0, 1)) {
          reuslt.push(')');
        }
        break;
      }
    }
  }
  console.log('reuslt:', reuslt);
}
solution('()))((()'); // ()(())()

// solution('(()())()');

// https://school.programmers.co.kr/learn/courses/30/lessons/76502
function solution(s) {
    const chars = s.split('');
    let stack = [...chars];
  
    let loopCount = 0;
    let number = 0;
  
    while (stack.length !== loopCount) {
      const checker = [];
      let isValid = true;
      for (let i = 0; i < stack.length; i++) {
          if(stack.length % 2 ===1) {
              isValid = false;
              break;
          }
        if (stack[i] === '[') {
          checker.push(']');
        } else if (stack[i] === '{') {
          checker.push('}');
        } else if (stack[i] === '(') {
          checker.push(')');
        } else {
          if (stack[i] !== checker.pop()) {
            isValid = false;
            break;
          }
        }
      }
      if (isValid) {
        number++;
      }
  
      const char = stack.shift();
      const remain = [...stack];
  
      stack = [];
      stack.push(...remain);
      stack.push(char);
        
      loopCount++;
    }
  
    return number;
  }
/**
 * 가운데 글자 가져오기
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 * @param {*} s
 */
function solution(s) {
  if (typeof s !== 'string' || s.length < 1 || s.length > 100) throw new Error('Invalid Arguemtns');

  var words = s.split('');
  var isEvenNumber = words.length % 2 === 0 ? true : false;

  var indexOfMid = Math.floor(words.length / 2); // 중앙 인덱스

  if (isEvenNumber) {
    if (words.length === 2) {
      return words[0] + words[1];
    }
    return words[indexOfMid - 1] + words[indexOfMid];
  }
  return words[indexOfMid];
}

console.log(solution('ab'));

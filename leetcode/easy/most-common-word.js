// function removeSpecialChar(convert) {
//   return convert.toString().replace(/[!.,]/g, '');
//   // Here ------------------------------^
// }

// /**
//  * @param {string} paragraph
//  * @param {string[]} banned
//  * @return {string}
//  */
// var mostCommonWord = function (paragraph, banned) {
//   const removedString = removeSpecialChar(paragraph);
//   const words = removedString.split(' ');
//   const map = new Map();
//   for (let word of words) {
//     word = word.toLowerCase();
//     if (map.has(word)) {
//       map.set(word, map.get(word) + 1);
//     } else {
//       map.set(word, 1);
//     }
//   }
//   console.log('map:', map);
//   console.log('map entries:', map.entries());
//   //const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
//   // console.log('sortedMap:',sortedMap);
//   const sortedArray = [...map.entries()].sort((a, b) => a[1] - b[1]);
//   console.log('sortedArray:', sortedArray);
//   let output = null;

//   while (sortedArray.length > 0) {
//     const target = sortedArray.pop();
//     if (banned.some(b => target.includes(b))) {
//       continue;
//     }
//     output = target;
//     break;
//   }
//   return output[0];
// };

var mostCommonWord = function (paragraph, banned) {
  let arr = paragraph.toLowerCase().split(/\W+/g);
  let map = {};

  for (let word of arr) {
    if (!map[word]) {
      map[word] = 1;
    } else {
      map[word]++;
    }
  }

  return Object.keys(map)
    .sort((a, b) => {
      return map[b] - map[a];
    })
    .filter(word => !banned.includes(word))[0];
};

//console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']));
console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));

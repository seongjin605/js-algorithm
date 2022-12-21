const sortAlphabets = function (text) {
  return text.split('').sort().join('');
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groups = [];
  while (strs.length) {
    const target = strs.pop();
    const sortedStr = sortAlphabets(target);
    const searchedIndex = groups.findIndex(g => sortAlphabets(g[0]) === sortedStr);
    if (searchedIndex !== -1) {
      groups[searchedIndex].push(target);
    } else {
      groups.push([target]);
    }
  }
  return groups;
};

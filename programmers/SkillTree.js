function solution(skill, skill_trees) {
  var answer = 0;

  var count = 0;

  var test = new Array(skill_trees.length);
  for (var i = 0; i < skill_trees.length; i++) {
    var skills = skill_trees[i].split(''); // 스킬트레 순서 반환
    var inputSkillSet = skill.split(''); // 스킬셋 순서 반환

    var result = [];
    while (inputSkillSet.length > 0) {
      var first = inputSkillSet.shift();
      if (skills.includes(first)) {
        result.push(skills.shift()); // 같으면 들어감
      } else {
        skills.shift();
      }
    }
    // result 결과를 통해 같은지 카운트
    console.log(skills);
  }
  // console.log(skillSet);

  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));

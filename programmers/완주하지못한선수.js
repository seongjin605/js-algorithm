function solution(participant, completion) {
  const map = new Map();
  for (let i = 0; i < completion.length; i++) {
    if (!map.has(completion[i])) {
      map.set(completion[i], 1);
    } else {
      map.set(completion[i], map.get(completion[i]) + 1);
    }
  }
  for (let j = 0; j < participant.length; j++) {
    if (!map.has(participant[j])) {
      return participant[j];
    } else {
      map.set(participant[j], map.get(participant[j]) - 1);
      if (map.get(participant[j]) < 0) {
        return participant[j];
      }
    }
  }
  return null;
}

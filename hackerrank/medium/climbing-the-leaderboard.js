function climbingLeaderboard(ranked, player) {
  const map = new Map();
  const result = [];
  while (player.length > 0) {
    const scoreByPlayer = player.shift();
    const initializedRanked = [...ranked, scoreByPlayer];
    initializedRanked.sort((a, b) => b - a);
    let rank = 0;
    for (let i = 0; i < initializedRanked.length; i++) {
      if (map.has(initializedRanked[i])) {
        map.set(initializedRanked[i], map.get(initializedRanked[i]));
      } else {
        map.set(initializedRanked[i], ++rank);
      }
    }
    result.push(map.get(scoreByPlayer));
    map.clear();
  }
  return result;
}

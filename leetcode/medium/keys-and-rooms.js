/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Array(rooms.length);
  const dfs = index => {
    if (visited[index]) return;

    visited[index] = true;

    const keys = rooms[index];
    for (let key of keys) {
      dfs(key);
    }
  };

  dfs(0);

  for (let visit of visited) {
    if (!visit) return false;
  }
  return true;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));

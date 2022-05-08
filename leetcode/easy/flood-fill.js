/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const changeColor = (row, col, target) => {
    if (
      row >= 0 &&
      row < image.length &&
      col >= 0 &&
      col < image[0].length &&
      image[row][col] === target
    ) {
      image[row][col] = newColor;
      changeColor(row + 1, col, target);
      changeColor(row - 1, col, target);
      changeColor(row, col + 1, target);
      changeColor(row, col - 1, target);
    }
  };

  if (image[sr][sc] !== newColor) changeColor(sr, sc, image[sr][sc]);

  return image;
};

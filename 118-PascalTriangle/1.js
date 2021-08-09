/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [[1], [1, 1]];
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }
  for (let i = 3; i <= numRows; i++) {
    let temp = [];
    for (let j = 0; j < result[i - 2].length + 1; j++) {
      if (j === 0 || j === result[i - 2].length) {
        temp.push(1);
      } else {
        temp.push(result[i - 2][j - 1] + result[i - 2][j]);
      }
    }
    result.push(temp);
  }
  return result;
};

/**
 * @param {number} n
 * @return {number}
 */
var arr = [];

var climbStairs = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr[n];
};

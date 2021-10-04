/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Number.MAX_VALUE;
  let inner = 0;
  for (let i = 0; i < nums.length; i++) {
    inner = inner + nums[i];
    max = Math.max(max, inner);
    if (inner < 0) {
      inner = 0;
    }
  }
  return max;
};

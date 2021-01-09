
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length - 1; i++) {
        let com = target - nums[i]
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (com == nums[j]) {
                return [i, j]
            }
        }
    }
};

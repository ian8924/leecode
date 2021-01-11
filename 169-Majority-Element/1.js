/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let result = {}
    nums.forEach((item) => {
        if (!result[item]) { result[item] = 1 }
        else { result[item]++ }
    })
    let count = 5
    for (let i in result) {
        if (result[i] > (nums.length / 2)) {
            return i
        }
    }
};

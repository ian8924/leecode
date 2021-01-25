/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let a = {}
    nums.forEach((item) => {
        if (a[item] !== 1) {
            a[item] = 1
        } else {
            a[item] = 2
        }
    })
    for (let i in a) {
        if (a[i] === 1) {
            return i
        }
    }
};

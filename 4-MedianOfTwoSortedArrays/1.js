/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let sort = nums1.concat(nums2).sort((a, b) => a - b)
    let index = sort.length >> 1
    return sort.length % 2 === 1 ? sort[index] : (sort[index] + sort[index - 1]) / 2
};
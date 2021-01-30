/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let a = nums.length
    let index = 0
    while(index<nums.length){
       if(nums[index]>=target){
           a=index
           break
       }
        index++
    }
    return a
};
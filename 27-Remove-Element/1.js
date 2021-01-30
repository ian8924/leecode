/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let a = nums.filter(item=>{
      return  item!==val
    })
    nums.splice(0,nums.length,...a)
};
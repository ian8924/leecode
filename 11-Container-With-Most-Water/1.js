/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length
    let result = 0
    while(right>left){
        let area=(right-left)*(Math.min(height[right],height[left]))
        if(area>result){
            result=area
        }
        if(height[right]>height[left]){
            left++
        }else{
            right--
        }
    }
    return result
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let result = []
    let curry = true
    for( let i = digits.length-1 ; i >= 0 ; i-- ) {
        if(curry) {
            let current = digits[i] + 1
            if(current===10){
                result.unshift(0)
                curry = true
            } else {
                result.unshift(current)
                curry = false
            }
        } else {
             result.unshift(digits[i])
        }
        
        if(digits[i-1] === undefined && curry) {
            result.unshift(1)
        }
    }
    return result
};
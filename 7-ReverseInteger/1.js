/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let range = Math.pow(2, 31)
    if (x > range - 1 || x < -range) {
        return 0
    }
    let result = ''
    if (x < 0) {
        x = -x
        result = '-'
    }
    let xArray = x.toString().split('')
    xArray.reverse()
    xArray.map(item => {
        result += item
    })
    result = parseInt(result)
    if (result > range - 1 || result < -range) {
        return 0
    }
    return result
};

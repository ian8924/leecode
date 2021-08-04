/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let a = { 1: '1' }
    for (let i = 2; i <= n; i++) {
        let strArr = String(a[i - 1])
        let arr = strArr.split('')
        let length = arr.length
        let index = 0
        let result = ''
        let current = arr[0]
        let count = 0
        while (index <= length) {
            if (arr[index] === current) {
                count++
            } else {
                result += count
                result += current
                current = arr[index]
                count = 1
            }
            index++
        }
        a[i] = result
    }
    return a[n]
};
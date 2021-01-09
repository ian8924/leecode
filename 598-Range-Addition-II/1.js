/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (ops.length == 0) {
        return m * n
    }
    let i = 50000, j = 50000
    ops.forEach(item => {
        if (i > item[0]) {
            i = item[0]
        }
        if (j > item[1]) {
            j = item[1]
        }
    })
    return i * j

};

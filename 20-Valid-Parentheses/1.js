/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let result = true
    let array1 = []
    let a = s.split('')
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "(" || a[i] === "[" || a[i] === "{") {
            array1.push(a[i])
        } else if (a[i] === ")") {
            let aaa = array1.pop()
            if (aaa !== "(") {
                result = false
                break
            }
        } else if (a[i] === "]") {
            let aaa = array1.pop()
            if (aaa !== "[") {
                result = false
                break
            }
        } else if (a[i] === "}") {
            let aaa = array1.pop()
            if (aaa !== "{") {
                result = false
                break
            }
        }
    }
    // console.log(array1.length)
    if (array1.length !== 0) {
        return false
    }
    return result
};

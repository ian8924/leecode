var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    if (x % 10 === 0 && x !== 0) {
        return false
    }
    let reverseInt = ''
    let y = x.toString().split('').reverse()
    y.map(item => {
        reverseInt += item
    })
    return x === parseInt(reverseInt)
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

s = ["h", "e", "l", "l", "o"]
// ans
s = ['o', 'l', 'l', 'e', 'h']
 // two pointer 解法
var reverseString = function (s) {
    let i = 0
    let j = s.length - 1
    while (i < j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
};

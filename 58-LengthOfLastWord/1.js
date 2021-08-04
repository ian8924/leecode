/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let filter  = s.trim()
    let a = filter.split(' ')
    return a[a.length-1].length
};
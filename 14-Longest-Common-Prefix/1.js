/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let need = ""
    if (strs.length > 0) {
        for (let i = 1; i <= strs[0].length; i++) {
            let a = strs.every(item => {
                return item.indexOf(strs[0].slice(0, i)) === 0 ? true : false
            })
            if (a) {
                need = strs[0].slice(0, i)
            } else {
                break
            }
        }
    }
    return need
};

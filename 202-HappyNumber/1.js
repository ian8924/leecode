/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let num = n.toString();
  let temp = num.split("");

  while (temp.length > 1) {
    let sum = 0;
    for (let i = 0; i < temp.length; i++) {
      let xx = parseInt(temp[i], 10);
      sum += xx * xx;
    }
    temp = [...sum.toString().split("")];
  }

  if (temp[0] === "1" || temp[0] === "7") {
    return true;
  }
  return false;
};

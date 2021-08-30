/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let count = prices.length - 1;
  let result = [];
  while (count >= 1) {
    let aa = prices[count];
    let a = prices.slice(0, count);
    let min = Math.min(...a);
    result.push(aa - min);
    count--;
  }
  let c = Math.max(...result);
  if (c > 0) {
    return c;
  } else {
    return 0;
  }
};

// Time Limit Exceeded QQ

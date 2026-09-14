// Best Time to Buy and Sell Stock
// LeetCode: 121

const prices = [7, 1, 5, 3, 6, 4];

/*
  Goal:
  - Buy the stock at the lowest possible price.
  - Sell it later at the highest possible price.
  - Return the maximum profit.

  Example:
  prices = [7, 1, 5, 3, 6, 4]

  Buy at 1
  Sell at 6

  Maximum Profit = 6 - 1 = 5
*/

// Assume initially that we have made no profit.
let maxProfit = 0;

// Assume the first price is the minimum buying price.
let minBuyingPrice = prices[0];

/*
  Start from index 1 because prices[0] is already
  stored inside minBuyingPrice.

  We only need to look at each price once.
*/
for (let i = 1; i < prices.length; i++) {
  /*
    Step 1: Check if the current price is lower
    than our current minimum buying price.

    If it is lower, update minBuyingPrice.

    Example:
    minBuyingPrice = 7
    current price = 1

    Since 1 < 7:
    minBuyingPrice = 1

    This means:
    "1 is a better price to buy the stock."
  */
  if (prices[i] < minBuyingPrice) {
    minBuyingPrice = prices[i];
  }

  /*
    Step 2: Calculate the profit if we sell
    the stock at the current price.

    Profit = Selling Price - Buying Price

    Example:
    current price = 6
    minBuyingPrice = 1

    profit = 6 - 1 = 5
  */
  const profit = prices[i] - minBuyingPrice;

  /*
    Step 3: Compare the current profit with
    the maximum profit we have found so far.

    If the current profit is greater,
    update maxProfit.
  */
  if (profit > maxProfit) {
    maxProfit = profit;
  }
}
//USING JS
// for (let i = 1; i < prices.length; i++) {
//   minBuyingPrice = Math.min(minBuyingPrice, prices[i]);

//   const profit = prices[i] - minBuyingPrice;

//   maxProfit = Math.max(maxProfit, profit);
// }

// The maximum profit for [7, 1, 5, 3, 6, 4] is 5.
console.log({ maxProfit });

// Best Time to Buy and Sell Stock II
// LeetCode: 122

console.log({ prices });
let profit = 0;
for (let i = 0; i < prices.length - 1; i++) {
  if (prices[i] < prices[i + 1]) {
    profit = profit + Math.max(0, prices[i + 1] - prices[i]);
  }
}

console.log({ totalProfit: profit });

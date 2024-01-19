/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0
*/

/*
Solution:
1. top-down: recursive dfs, for amount, branch for each coin, cache to store prev coin_count for each amount;
2. bottom-up: compute coins for amount = 1, up until n, using for each coin (amount - coin), cache prev values
consider coins [1,2,5], amount 11, therefore we need to solve for dp[11].
first, start with dp[0] = 0, i.e. number of ways to make up amount 0 is 0.
when i = 1, 
  coin = 1 => i - coin = 0, since result >= 0, carry on
  number of ways = min(Infinity, dp[0] + 1), where +1 referring to the occurence this coin 1 is used
when i = 2, 
  coin = 1 => i - coin = 1,
  number of ways = min(Infinity, dp[1] + 1) = min(Infinity, dp[0] + 1 + 1) = min(Infinity, 2)
  coin = 2 => i - coin = 0,
  number of ways = min(Infinity, dp[0] + 1) = 1
*/

// Bottom up
var coinChange = function (coins, amount) {
  // dp[i] represents the least number of coins that can make the amount, i.
  const dp = Array(amount + 1).fill(Infinity); // Init with a large value
  dp[0] = 0; // number of coins that can make 0 is 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      } // else no need to compare
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
console.log(coinChange([1, 2, 5], 11)); // 3

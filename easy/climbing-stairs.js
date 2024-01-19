/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/*
Steps -> Ways -> Total
0 -> 1 -> 1
1 -> 1 -> 1
2 -> 11, 2 -> 2
3 -> 111, 21, 12 -> 3
4 -> 1111, 22, 211, 121, 112 -> 5
5 -> 11111, 221, 212, 112, 2111, 1211, 1121, 1112 -> 8

f(n) = f(n-1) + f(n-2)
*/

var climbStairs = function (n) {
  const memo = {};

  function count(k) {
    if (k === 2) return 2;
    if (k <= 1) return 1;

    memo[k] = count(k - 1) + count(k - 2);
    return memo[k];
  }
  return count(n);
};

console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3
console.log(climbStairs(4)); //5
console.log(climbStairs(5)); //8

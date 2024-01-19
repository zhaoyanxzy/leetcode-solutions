/*
Given an integer array nums, return the length of the longest strictly increasing 
subsequence

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

/*
Solution: 
Initialise an array dp to be the same length as that of the input array.
dp[i] represents the length of the longest subsequence at i.
Then iteerate through input array and update dp based on the preceding element.

For [10,9,2,5,3,7,101,18] output 4:
dp[0] = 1
At i = 1, num = 9:
  j = 0 => 9 < 10, longest subsequence dp[1] = 1
At i = 2, num = 2:
  j = 0 =>  2 < 10, subsequeunce = 1
  j = 1 => 2 < 9, subsequence = 1
  longest subsequence dp[2] = max(1, 1) = 1
At i = 3, num = 5:
  j = 0 => 5 < 10, subsequence = 1
  j = 1 => 5 < 9, subsequence = 1
  j = 2 => 5 > 2, longest subsequence dp[3] = 1 + dp[2] = 2
At i = 6, num = 7:
  j = 0 => 7 < 10, subsequence = 1
  j = 1 => 7 < 9, subsequence = 1
  j = 0 => 7 > 2, subsequence = 1 + dp[2] = 1 + 1 = 2
  j = 0 => 7 > 5, subsequence = 1 + dp[3] = 1 + 2 = 3
*/

var lengthOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4

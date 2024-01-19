/*
Given an integer array nums, find a subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/*
Solution:
- Store the previous max and min products, as min * negative can become max
- Iterate through and keep using our previous maximum & min to calculate the new maximum & min products.

 */
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // given the new number, the new maximun can have 3 conditions
    // 1. number(+) * prevMax(+) is the largest
    // 2. number(+) it self is the largest
    // 3. number(-) * prevMin(-) is the largest
    const curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    const curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

    // updating the prevMax & prevMin, these two may swap locations
    prevMax = curMax;
    prevMin = curMin;

    result = Math.max(curMax, result);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4])); // 6

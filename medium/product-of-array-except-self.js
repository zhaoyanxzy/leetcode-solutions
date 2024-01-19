import { getProductsExceptSelf } from "../utils/num-utils.js";
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/*
Solution: 
On the first pass, iterate through the array and create an array of prefixes, which give us the product of all left elements for each position
On the second pass, iterate through the array and create an array of suffixes, which give us the product of all right elements for each position
On the third pass, build a result array that contains the product of prefixes[i] * suffixes[i] for each position, and return this as our answer.
*/

var productExceptSelf = function (nums) {
  // first, create a prefix array that moves from the left,
  // gathering the running product of the prefix at each index
  const prefix = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1;
    } else {
      // Otherwise, multiply nums[i-1] times the prefix at position i-1,
      // and add that to the prefix array at position i
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  const suffix = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }
  return result;
};

var optimisedProductExceptSelf = function (nums) {
  return getProductsExceptSelf(nums);
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(optimisedProductExceptSelf([1, 2, 3, 4])); // [24,12,8,6]

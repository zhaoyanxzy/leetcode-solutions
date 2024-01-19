import stringUtils from "../utils/string-utils.js";
/*
Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/*
Solution:
-  hashset to get unique values in array, to check for duplicates easily
*/

const { generateHashMapOccurences } = stringUtils;
function containsDuplicate(nums) {
  const occurences = generateHashMapOccurences(nums);
  return Object.values(occurences).some((occurence) => occurence > 1);
}

var optimisedContainsDuplicate = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] !== undefined) {
      return true;
    } else {
      map[num] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true

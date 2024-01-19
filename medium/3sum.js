/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

/*
Solution:
nums[j] + nums[k] = 0 - num[i]

sum = nums[startIndex] + nums[endIndex]

Case 1: sum > target
Take [-3, -1, 1, 2, 5]
i = 0; startIndex = 1; endIndex = 4; target = 3; sum = -1 + 5 = 4
Since array is sorted, with 5 being the max and -1 being the min in this subarray, 
and sum > target, this means the sums of 5 with other subsequent elements after -1 will be > target.
Therefore endIndex--.

Case 2: sum < target
Take [-3, -1, 1, 2, 5]
i = 0; startIndex = 1; endIndex = 3; target = 3; sum = -1 + 2
Since array is sorted, with 2 being the max and -1 being the min in this subarray, 
and sum < target, this means the sums of -1 with other preceding elements before 2 will be < target.
Therefore startIndex++.

Case 3: sum === target
Found a match
Also note there can be duplicates here. Take [-4,0,0,0,1,3,4,4]
i=1 will give the same results as i=2, i=3. Therefore use a while loop to ++startIndex
Likewise for endIndex
*/
var threeSum = function (nums) {
  const sortedNums = nums.sort();
  const results = [];
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      // preventing duplicates
      continue;
    }
    const target = 0 - sortedNums[i];
    let startIndex = i + 1;
    let endIndex = nums.length - 1;
    while (endIndex > startIndex) {
      const sum = sortedNums[startIndex] + nums[endIndex];
      if (sum > target) {
        // Case 1
        endIndex--;
      } else if (sum < target) {
        // Case 2
        startIndex++;
      } else {
        // Case 3
        results.push([
          sortedNums[i],
          sortedNums[startIndex],
          sortedNums[endIndex],
        ]);
        while (sortedNums[startIndex] === sortedNums[startIndex + 1]) {
          startIndex++;
        }
        while (sortedNums[endIndex] === sortedNums[endIndex + 1]) {
          endIndex++;
        }
        startIndex++;
        endIndex--;
      }
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]

function getMaxDiffSingleDirection(nums) {
  // minuend - subtrahend = difference
  let minSubtrahend = nums[0];
  let maxDiff = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let localDiff = nums[i + 1] - nums[i];
    if (localDiff > 0) {
      if (nums[i] < minSubtrahend) {
        minSubtrahend = nums[i];
      }
      const newLocalDiff = nums[i + 1] - minSubtrahend;
      if (newLocalDiff > maxDiff) {
        maxDiff = newLocalDiff;
      }
    }
  }
  return maxDiff;
}

function getMaxSumOfSubArray(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let max = nums[0];
  let accumulatedValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let localMax = Math.max(nums[i], accumulatedValue + nums[i]);
    if (localMax > max) {
      max = localMax;
    }

    accumulatedValue = localMax;
  }
  return max;
}

function getProductsExceptSelf(nums) {
  const result = [];
  let prefix = 1;
  let suffix = 1;

  // Loop through the input array - for each position,
  for (let i = 0; i < nums.length; i++) {
    // the result array should equal the prefix tracker.
    result[i] = prefix;
    // Then, update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position.
    prefix *= nums[i];
  }

  // Loop backwards through the array.
  for (let i = nums.length - 1; i >= 0; i--) {
    // For each iteration, set the result array to be
    // the product of itself multiplied by the suffix tracker.
    result[i] *= suffix;
    // Then, update the suffix tracker to be the product of itself,
    // multiplied by the input value at that position.
    suffix *= nums[i];
  }

  return result;
}

function binarySearchOfSorted(sortedArray, target) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (sortedArray[middleIndex] === target) {
      // found the key
      return middleIndex;
    } else if (sortedArray[middleIndex] < target) {
      // continue searching to the right
      startIndex = middleIndex + 1;
    } else {
      // search searching to the left
      endIndex = middleIndex - 1;
    }
  }
  // key wasn't found
  return -1;
}

function binarySearchOfRotated(rotatedArray, target) {
  let startIndex = 0;
  let endIndex = rotatedArray.length - 1;

  while (startIndex <= endIndex) {
    let mid = Math.floor((startIndex + endIndex) / 2);

    if (rotatedArray[mid] === target) {
      return mid;
    }

    // Check if the left side is sorted
    if (rotatedArray[startIndex] <= rotatedArray[mid]) {
      if (rotatedArray[startIndex] <= target && target <= rotatedArray[mid]) {
        // target is in the left
        endIndex = mid - 1;
      } else {
        // target is in the right
        startIndex = mid + 1;
      }
    }

    // Otherwise, the right side is sorted
    else {
      if (rotatedArray[mid] <= target && target <= rotatedArray[endIndex]) {
        // target is in the right
        startIndex = mid + 1;
      } else {
        // target is in the left
        endIndex = mid - 1;
      }
    }
  }

  return -1;
}

export default {
  getMaxDiffSingleDirection,
  getMaxSumOfSubArray,
  getProductsExceptSelf,
  binarySearchOfSorted,
  binarySearchOfRotated,
};

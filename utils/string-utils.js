// returns { num: occurences }
function generateHashMapOccurences(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] = map[num] + 1 || 1;
  }
  return map;
}

function isPalindrome(s) {
  const cleanedS = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let left = 0;
  let right = cleanedS.length - 1;

  while (left < right) {
    if (cleanedS[left] !== cleanedS[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

export default { generateHashMapOccurences, isPalindrome };

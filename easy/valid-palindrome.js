import stringUtils from "../utils/string-utils.js";

const { isPalindrome: isPalUtils } = stringUtils;
const isPalindrome = (s) => {
  return isPalUtils(s);
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false

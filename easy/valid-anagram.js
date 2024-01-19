import stringUtils from "../utils/string-utils.js";
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

const { generateHashMapOccurences } = stringUtils;

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCharsCounts = generateHashMapOccurences(s);
  const tCharsCounts = generateHashMapOccurences(t);

  const sChars = s.split("");
  const tChars = t.split("");

  for (let i = 0; i < sChars.length; i++) {
    const char = sChars[i];
    if (!tCharsCounts[char] || tCharsCounts[char] !== sCharsCounts[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

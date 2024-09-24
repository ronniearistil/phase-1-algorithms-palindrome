function isPalindrome(word) {
  // Step 2: Reverse the string
  const reversedStr = word.split('').reverse().join('');

  // Step 3: Compare the reversed string to the original string
  return word === reversedStr;
}

/* 
1. Define a function named isPalindrome that accepts a string as an argument.
2. Reverse the string.
3. Compare the reversed string to the original string.
4. If they are the same, return true (it is a palindrome).
5. Otherwise, return false (it is not a palindrome).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("robot")); // false
  console.log(isPalindrome("level")); // true
  console.log(isPalindrome("hello")); // false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

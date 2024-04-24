function isPalindrome(word) {
  // Write your algorithm here
    return word == word.split('').reverse().join('')
  
}

/* 
  Add your pseudocode here
  Create a Palindrome function 
  Split the word into an array of characters
  Reverse the array
  Join the reversed array back into a string
  Check if the original word is equal to reversed word.
*/

/*
  Add written explanation of your solution here
  So we passed the word as a parameter,returns word as true if it's comparison equals to the reveresed word:
  So The word value is initially 'split' into an array then we 'reverse' the value inside the array and lastly 'join' the array back into a word for our compariosn

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(word) {
  let wordArry = word.split('').reverse().join('');
  console.log(wordArry)
  return wordArry === word
}
/* 
  Need to check if the reverse word equals the inputted word
  Need to reverse the input word
  How to rearrange input string
  use .reverse to reverse array
  use .split to turn string into arrays
  use .join to combine the arrays into a string


*/

/*
  Add written explanation of your solution here
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

// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    myString = myString.substring(1, myString.length);
    printString(myString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString === '') {
    return ''
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1))
  }

  return false
}

function addUpTo() {

}

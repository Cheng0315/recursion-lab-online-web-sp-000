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

function addUpTo(arr, n) {

  if (n > 0) {
    return addUpTo(arr, n-1) + arr[n]
  } else {
    return arr[0]
  }
}

function maxOf(arr) {


  if (arr.length > 1) {
    let returnValue = addUpTo(arr.slice(1))
    if (returnValue >= arr[0]) {
      return returnValue
    } else {
      return arr[0]
    }
  } else {
    return arr[0]
  }
}

// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.
//
// Please return the gap between the first position of c and the last position of c.
//
// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

function firstToLast(str,c){
  //take in the string and character
  // take away position of the first time it appears from the last time it appears

  let sum = str.lastIndexOf(c) - str.indexOf(c)

  if(str.indexOf(c) === -1){
    return -1
  }else if(sum === 1){
    return 0
  }else{
    return sum
  }
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name) {
  let arr = name.split(" ");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0] + ".");
  }

  return newArr.join("").slice(0, 3).toUpperCase();
}
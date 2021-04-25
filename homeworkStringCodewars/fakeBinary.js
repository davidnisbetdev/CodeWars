// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let arr = x.split("");
  let other = [];

  for (let i = 0; i < x.length; i++) {
    if (arr[i] >= "5") {
      other.push("1");
    } else {
      other.push("0");
    }
  }
  return other.join("");
}
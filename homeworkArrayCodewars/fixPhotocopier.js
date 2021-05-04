// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

function broken(x) {
  let arr = x.split("");
  console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      newArr.push("0");
    } else {
      newArr.push("1");
    }
  }

  return newArr.join("");
}


//This also works
function broken(x) {
  return x.split("").map((x) => (x == "0" ? "1" : "0")).join("");
}
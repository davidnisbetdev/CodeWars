// Task
//
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
//
// The first mission: Traversing arr, find the shortest string length.
//
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.


function cutIt(arr) {
  let smallWord = arr[0].length;   // Initially make smallWord the length of first element
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length < smallWord) { //if Array element is smaller than smallWord currently then change smallWord to that.
      smallWord = arr[i].length;
    }
  }
  let map = arr.map(function(x) {
    return x.slice(0, smallWord); // iterate through the array and slice each word to the length of smallWord
  });
  return map;
};

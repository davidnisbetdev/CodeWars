// Implement a function which accepts 2 arguments: string and separator.
//
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

function splitAndMerge(string, separator) {
  let splitWords = string.split(" ")
  let arr = []
  let done = []

  for(let i = 0; i < splitWords.length; i++){
    arr.push(splitWords[i].split("").join(separator))
  }

  done = arr.join(" ")

  return done
}

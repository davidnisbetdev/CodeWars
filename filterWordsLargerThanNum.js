// Write a function filterLongWords that takes a string sentence and an integer n.

// Return a list of all words that are longer than n.

// Example:

// filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

function filterLongWords(sentence, n) {
    let arr = sentence.split(' ')
    
    return arr.filter(x => x.length > n)
  }
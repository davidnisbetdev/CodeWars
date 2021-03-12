// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
//
// The list will never be empty and will only contain values that are greater than or equal to zero.
//
// Good luck!

const sumSquareEvenRootOdd = ns => {

  let newArr = []
  for(let i = 0;i < ns.length; i++){
    if(ns[i] % 2 === 0){
      newArr.push(ns[i]**2)
    }else{
      newArr.push(Math.sqrt(ns[i]))
    }
  }
 let sum = newArr.reduce((acc, c) => acc += c, 0)
 return Math.round(sum * 100) / 100
};

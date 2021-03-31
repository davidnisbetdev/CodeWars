// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// THIS CODE IS A HOT MESS

function squareDigits(num){

    let arr = num.toString().split('')
    let numArr = arr.map(Number)
    let final = numArr.map(n => n * n)
           
    return Number(final.join(''))
    
    }

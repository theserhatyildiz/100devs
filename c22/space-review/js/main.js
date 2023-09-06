//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [1,2,3,4,5]

let sum = nums.reduce((a,b) => a + b, 0)

alert (sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squaredArrayNumbers(arr) {

    let squaredArray = [];

    for(let i = 0; i < arr.length; i++) {
        let squaredNumber = arr[i] * arr[i]
        squaredArray.push(squaredNumber)
    }

    return squaredArray;

}

console.log(squaredArrayNumbers([1,2,3,4]))

//Create a function that takes string
//Print the reverse of that string to the console

function reverseAndPrint(str) {

    let reverseString = str.split('').reverse().join('');

    console.log(reverseString)
}

reverseAndPrint('Hello World')

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome(str) {

    let cleanStr = str.replace(/\s/g, '').toLowerCase();

    let reversedStr =cleanStr.split('').reverse().join('');

    if(cleanStr === reversedStr) {

        alert(`${str} is a palindrome`);

    } else {

        alert(`${str} is not a palindrome`)
    }

}

isPalindrome('racecar')
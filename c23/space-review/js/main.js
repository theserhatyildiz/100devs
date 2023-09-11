//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

// let nums = [1,2,3,4,5,6]

// alert ( nums.reduce( (acc,c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = nums => nums.map( num => num**2)

console.log(newArr([1,2,3,4,5]))

//Create a function that takes string
//Print the reverse of that string to the console

let myString = 'Galwin'

function reverseString () {

    return myString.split('').reverse().join('')
}

console.log(reverseString())

//veya

let unoReverse = str => console.log( str.split('').reverse().join (''))

unoReverse('Galwin')


//Create a function that takes in a string
//Alert if the string is a palindrome or not


const palindromeCheck = str => alert(str === str.split('').reverse().join(''))

palindromeCheck('Galwin')
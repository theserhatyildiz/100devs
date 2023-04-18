// *Variables*
// Create a variable and console log the value

let age1 = 25

console.log(age1)

// Create a variable, add 10 to it, and alert the value

let age2 = 25

result= age2 + 10

alert(result)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNum(n1, n2, n3, n4){

    alert(n1-n2-n3-n4)
}

subFourNum(50, 5, 5, 1)

// Create a function that divides one number by another and returns the remainder

function divideOneNumAndReturn(num1, num2) {

    return num1 % num2

}

console.log(divideOneNumAndReturn(5,2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbers (z1,z2){

    let sum = z1 + z2

    if( sum > 50 ){

        alert('Jumanji')
    }
}

addTwoNumbers(26,30)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplysThreeNum(t1, t2, t3){

    let multi = t1 * t2 * t3

    if( multi % 3 === 0){

        alert("zebra")
    }

}

multiplysThreeNum(3,3,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordXTimes(word, num){

    for( let i = 1; i<= num; i++){

        console.log(word)

    }

}

logWordXTimes('wonderful', 10)
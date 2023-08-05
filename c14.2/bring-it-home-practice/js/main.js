// *Variables*
// Create a variable and console log the value

let serhat = 'He will change the world!'

console.log(serhat)

// Create a variable, add 10 to it, and alert the value

let sy = 10

sy = sy + 10 

alert(sy)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractsFourNums(num1, num2, num3, num4) {

    let sub = num1 - num2 - num3 - num4

    alert(sub)

}

subtractsFourNums(20, 7, 2, 1)

// Create a function that divides one number by another and returns the remainder

function divideNum (n1, n2) {

    let divide = n1/n2 

    return divide


}

divideNum(8,4)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNums(n1, n2) {

    let sum = n1 + n2

    let serhat = 'Serhat'

    let jumanji = 'Jumanji'

    if( sum > 50) {
        alert(jumanji)
    }
    else {
        alert(serhat)
    }

}
addTwoNums( 8,2)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplysThreeNums(n1, n2, n3) {

    let multiplys = n1 * n2 * n3

    let zebra = 'zebra'

    if ( multiplys % 3 === 0 ){

        alert(zebra)
    }
}
multiplysThreeNums(3,3,3)

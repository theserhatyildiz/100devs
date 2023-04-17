//---Easy
// //create a function that subtracts two numbers and alerts the difference

function subTwoNumsAndAlert (n1, n2) {
    alert ( n1-n2)
}
    // subTwoNumsAndAlert (50,30 )
    // subTwoNumsAndAlert ( 100, 30)

// //create a function that divides three numbers and console logs the quotient

function dividesThreeNumsAndLogs(zebra, forest, unicorn) {
    console. log ( zebra / forest / unicorn )
    }
    dividesThreeNumsAndLogs(12,4,3)


// //create a function that multiplys three numbers and returns the product

function multiplyThreeNumsAndReturn(num1, num2, num3) {
    return num1 * num2 * num3;
}

function turnIntoMoney() {
    let product = multiplyThreeNumsAndReturn(5, 10, 2);
    alert('$' + product);
}

turnIntoMoney ()

//---Medium
//create a function that takes in three numbers. 
// Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide (z1,z2, z3) {
    return (z1 + z2) % z3
}
    console.log(addTwoAndDivide(3, 3, 2))



//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function calc(n1, n2, n3, n4) {

    let multiply = n1 * n2 

    if ( multiply > 100) {

        let sum = n3 + n4

        console.log(sum)
    }else if (multiply < 100) {
        
        let sub = n3 - n4

        console.log(sub)
    }else if (multiply = 100) {

        let sum1 = n1 + n2 + n3 

        alert(sum1)
    }
}

let n1 = 10

let n2 = 9

let n3 = 10

let n4 = 10

calc(n1, n2, n3, n4)
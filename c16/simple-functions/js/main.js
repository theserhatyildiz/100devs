//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtractsTwoNums(n1, n2) {

    alert(n1-n2)
}

subtractsTwoNums(14,4)

//create a function that divides three numbers and console logs the quotient

function divideThreeNums(n1, n2, n3){

    console.log(n1/n2/n3)

}

divideThreeNums(20000, 100, 10)

//create a function that multiplys three numbers and returns the product

function multiplysThreeNumsReturns(n1,n2,n3) {

    let product1 = n1 * n2 * n3

    return product1

}

 multiplysThreeNumsReturns(1,3,4)


//---Medium
//create a function that takes in three numbers. 

// Add the first two numbers and 

// return the remainder of dividing the sum of the first two numbers by the third number

function addThreeReturn(n1,n2,n3) {

    let sum = (n1 + n2) % n3 

    return sum

}

let sum1 = addThreeReturn(1,4,5)

alert(sum1)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function MultiplyTwoNums(n1, n2, n3, n4) {

    let product2 = n1 * n2

    if (product2>100) {
        
        console.log(n3 + n4)
    
    }else if (product2<100) {

        console.log(n3 - n4)
    }else if (product2=100) {
       
        alert(n1*n2*n3)
    }

}

MultiplyTwoNums(1,2,3,4)
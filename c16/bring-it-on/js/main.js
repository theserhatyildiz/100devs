// *Variables*
// Create a variable and console log the value

let num1 = 10

console.log(num1)

// Create a variable, add 10 to it, and alert the value

let num2 = 10

num2 = num2 + 10

alert(num2)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractsFourNumbersAndAlerts(n1,n2,n3,n4){

    let subtracts = n1-n2-n3-n4

    alert(subtracts)
}

subtractsFourNumbersAndAlerts(10,5,3,2)

// Create a function that divides one number by another and returns the remainder

function dividesOneByAnotherAndReturns (n1,n2) {

    let divide = n1/n2

    return divide

}

let x = dividesOneByAnotherAndReturns(2,1)

alert(x)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumAndIf (n1,n2) {

    if(n1+n2>50){
        alert('jumanji')
    }
}

addTwoNumAndIf (25, 26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplysThreeNumAndIfs(n1,n2,n3){

    let product = n1*n2*n3 



if (product % 3 === 0){
    alert('zebra')
}
}

multiplysThreeNumAndIfs(3,3,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function takeAWordAndNum (word, number) {

    for(let i=1; i<= number; i++ ){
        console.log(word)
    }
}

takeAWordAndNum('wonderful life', 21)
// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

const { directivesPlugin } = require("bootstrap-vue")

let favFood = 'pizza'

favFood = 'hamburger'

alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = 'Galwin App'

// alert( str[1])

alert( str.charAt(1))


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function takeInThreeNums (n1,n2,n3) {

    let product = (n1/n2) * n3

    alert(product)

}

takeInThreeNums (4,2,3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function takesOne (n1) {

    console.log(Math.cbrt(n1).toFixed(4))
}

takesOne(2)

// *Conditionals*
//Create a function that takes in a month. 
// If it is a summer month alert "YAY". If another other month, alert "Booo"

function determineSeason(month) {

    let montLowerCase = month.montLowerCase()
    
    if(montLowerCase === 'june' || montLowerCase=== 'july' || montLowerCase  === 'august' ) {
        alert('YAY')
    } else {
        alert('Booo')
    }
}

determineSeason ('june')


//*Loops*
//Create a function that takes in a number. 
// Console log every number from 1 to that number while skipping multiples of 5.

function skip5s (n) {

    for (let i = 1; i<= n; i++) {

        if( i % 5 !== 0) {
            console.log(i)
        } 

        }
    }


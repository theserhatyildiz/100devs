// Create a function that takes in an array. 
// If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". 
// If they are equal, alert "We close in an hour".


function checkFirstAndLAst (arr) {

    if (arr[0] < arr[arr.lenght-1] ) {

        alert('hi')
    } else if (arr[0] > arr[arr.lenght-1]) {

        alert('bye')

    } else {

        alert('We close in an hour')
    }


}

checkFirstAndLAst ()

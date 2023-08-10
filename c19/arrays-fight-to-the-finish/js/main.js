//Create an array of movie titles. Loop through the array and add each element to the h2.

let movies = ['rocky', 'bob', 'jack']

for(let i=0; i < movies.length; i++) {

    document.querySelector('h2').innerText += movies [i]

}



//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let nums = [10, 20, 30]

nums.forEach((item, i) => {

    num[i] = item + 3
})

//Find the average of all the numbers from question two

let sum = 0

for( let i = 0; i < nums.length; i++){

    sum = sum + num[i]

}
console.log(sum / nums.length)

 




// solution-1

// let movies = ['rocky', 'bob', 'jack']

// for(let i = 0; i< movies.lenght ; i++){

// document.querySelector('h2').innerText += movies [i]

// }

// solution-2

// let nums = [10, 20, 30]

// nums.forEach((item, i)) => {
    
//     nums[i] = item + 3

    
// }
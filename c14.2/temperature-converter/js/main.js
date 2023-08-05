//Write your pseduo code first! 

// sel --> fahreneit

// click a button

document.querySelector('#convert').addEventListener('click', convert)

// get the value + convert it using calculation

function convert() {

    let temp = document.querySelector('#sel').value

    temp = temp * 9/5 + 32

// display it

    document.querySelector('#placeToYell').innerText = temp

}




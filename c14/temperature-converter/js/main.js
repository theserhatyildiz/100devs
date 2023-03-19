//Write your pseduo code first! 

// 0 --> 28

// button

// document.querySelector('#convert').addEventListener('click', convertTemperature)

document.querySelector('#convert').addEventListener('click', convertTemp)

// function convertion celsius to fahrenheit

function convertTemp() {

   let temp= document.querySelector('#sel').value

    temp = temp * 9/5 + 32

    document.querySelector('#placeToSee').innerText= temp
}

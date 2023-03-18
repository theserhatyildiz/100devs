//Write your pseduo code first! 

// 0 --> 32

document.querySelector('#convert').addEventListener('click', convertTemperature)

function convertTemperature() {

        // enter a value in celsius 

        let temp = document.querySelector('#sel').value

         // have that value be converted from celsius to Fahrenheit 

         temp = temp * 9/5 + 32

         // want to see in the dom

         document.querySelector('#placeToSee').innerText = temp

}
    
    



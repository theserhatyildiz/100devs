//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine {
  
    constructor (color, make, model, price) {
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }

    turnOn () {
    
        console.log('Good day, I am now on') 
    }
    steam() {
    
        console.log('Itsss summer sale') 
    }
    brew () {

        console.log('Good stuff coming your way')    
    }
}
    
    let gaggia = new EspressoMachine('red', 'gaggia', 'classic pro', 400);
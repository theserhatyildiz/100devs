//Create a constructor with 4 properties and 3 methods


function MakePizza (chSize, chToppings,chCrust, chSouce ) {

this.size = chSize
this.toppings = chToppings
this.crust = chCrust
this.sauce = chSouce

this.estimatedDeliveryTime = function (){
    console.log('Calculating...')
    }
    
this.burnMouth = function () {
    console.log('FFJkadjfl;kasjdfifi')
    }
    
this.frisbee = function() { 
    console.log('YEEEeeeetttt')

}
}

let dominos = new MakePizza ('large', ['garlic', 'spinach', 'pepper'], 'thin', 'heavy')

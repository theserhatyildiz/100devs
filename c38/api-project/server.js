const express = require ('express')
const app = express ()
const PORT = 8000

const rappers = {

    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    'chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },

    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }

}

app.get('/', (request, response) => {

    response.sendFile(__dirname + '/index.html')

})

app.listen (PORT, () => {

    console.log(`The server is running on Port ${PORT}`)
})

app.get('/api/:rapperName', (request, response) =>{

    const rappersName = request.params.rapperName.toLocaleLowerCase()

    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }

response.json(rappers)

})
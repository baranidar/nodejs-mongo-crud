const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/chiligarlic'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
        .then(() => console.log('Database connected'))
        .catch(err => console.log(err))

const con = mongoose.connection

con.on('open', () => {
    console.log('Connection obtained...')
})

app.use(express.json())

const recipeRouter = require('./routes/Recipes')
app.use('/recipes', recipeRouter)

app.listen(9000, () => {
    console.log('Server started')
})
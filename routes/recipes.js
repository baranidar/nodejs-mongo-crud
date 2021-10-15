const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe')

router.get('/', async(req, res) => {
    try{
        const recipes = await Recipe.find()
        res.json(recipes)
    }catch(err){
        res.send('Error ' + err)
    }
  
})

router.get('/:id', async(req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id)
        res.json(recipe)
    }catch(err){
        res.send('Error ' + err)
    }
  
})

router.patch('/:id', async(req,res) => {
    try{
        const recipe = await Recipe.findById(req.params.id)
        recipe.description =req.body.description 
        const recipe1 = await recipe.save()
        res.json(recipe1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const recipe = await Recipe.findById(req.params.id)
        const recipe1 = await recipe.remove()
        res.json(recipe1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        rating: req.body.rating
    })

    try{
        const recipe1 = await recipe.save()
        res.json(recipe1)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router
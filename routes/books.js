const model = require('../database/model')
const route = require('express').Router();

route.get("/authors",async function(request,response){
    try{
        let result=await  model.author.findAll({include: [model.book]})
        response.json(result)
        }
        catch(e){
            console.log(e)
            response.status(500).send({message:"Server error"})
        }

})

route.post("/authors",async function(request,response){
    try
   {
     let author = {
        authorno: request.body.authorno,
        name: request.body.name,
        city: request.body.city,
        books: request.body.books
     }

     console.log(author)
     await model.author.create(author, {include: [model.book]})
     response.status(201).json(author)
     
   }
   catch(e){
    console.log(e)
    response.status(500).send({message:"Server error"})
   }
})

module.exports = route
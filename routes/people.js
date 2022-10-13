const model = require('../database/model')
const route = require('express').Router();
/** 
 *  @swagger
 * /api/people:
 *   get: 
 *     summary: Returns a list of person objects
 *     description : this api reads people table and returns a list of json object
*/
route.get("/people",async function(request,response){
    try{
    let result=await  model.person.findAll()
    response.json(result)
    }
    catch(e){
        console.log(e)
        response.status(500).send({message:"Server error"})
    }
})

route.get("/people/:id",async function(request,response){
    try{
          let person =    await model.person.findByPk(request.params.id)
          if(person==null)
            response.status(204).send({message:"No Record with that primary key"})
         else
            response.json(person)
    }
    catch(e){
        console.log(e)
        response.status(500).send({message:"Internal Server Error"})
    }
})

route.delete("/people/:id",async function(request,response){
    try{
          let person =    await model.person.findByPk(request.params.id)
          if(person==null)
            response.status(204).send({message:"No Record with that primary key"})
         else
            {
            person.destroy()
            response.json({message:"record is deleted"})
            }
    }
    catch(e){
        console.log(e)
        response.status(500).send({message:"Internal Server Error"})
    }
})

route.put("/people/:id",async function(request,response){
    try{
          let person =    await model.person.findByPk(request.params.id)
          if(person==null)
            response.status(204).send({message:"No Record with that primary key"})
         else
            {
            person.name= request.body.name? request.body.name:person.name;
            person.city = request.body.city? request.body.city:person.city;
            person.save()
            response.json(person)
            }
    }
    catch(e){
        console.log(e)
        response.status(500).send({message:"Internal Server Error"})
    }
})
route.post("/people",async function(request,response){
   try
   {
     let person = {sno: request.body.sno,name: request.body.name,city:request.body.city}
     await model.person.create(person)
     response.status(201).json(person)
     
   }
   catch(e){
    console.log(e)
    response.status(500).send({message:"Server error"})
   }
})


module.exports = route
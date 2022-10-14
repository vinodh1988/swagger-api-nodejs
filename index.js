var express= require('express')
var app = express()

var people =require('./routes/people')

var books =require('./routes/books')
//if a request is post and if the posted data is urlencoded express will decode and parse the request

const swaggerUi = require('swagger-ui-express')
/*const swaggerJSDoc = require('swagger-jsdoc')

const swaggerAPI= {
    openapi: '3.0.0',
    info:{
        title: "My Sample API",
        vesion: '1.0.0'
    },
    servers: [{
        url: 'http://localhost:3000',
        description :' Express based server'
    }]
}

const options = {
    swaggerDefinition: swaggerAPI, apis: ['./routes/*.js']
}

const swaggerSpec =swaggerJSDoc(options);*/
const swaggerDoc= require('./swagger.json');


app.use(express.urlencoded({extended: true}))
//if a request is post and if the post data is json  express will parse it
app.use(express.json())

app.use('/api',people)
app.use('/newapi',books)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc))

app.listen(3000,function(){
    console.log("app is listening on port 3000")
})
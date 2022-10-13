const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:pgsql@localhost:5433/swagger')

sequelize.
authenticate()
.then(()=>{
    console.log("connection has been established")
}).catch(err=>{
  console.error("Unable to connect to the database")  
})

module.exports = sequelize
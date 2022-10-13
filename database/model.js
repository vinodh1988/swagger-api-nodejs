const { TEXT } = require('sequelize')
const Sequelize = require ('sequelize')
const sequelize = require('./connection')

var person = sequelize.define('person',
{
    sno: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    city:{
        type: Sequelize.TEXT,
        allowNull: false
    }},
    {
    timestamps: false,
    createdAt: false,
    updatedAt: false
    }
)

person.sync ({drop:false}).then(()=>{
    console.log('Person table synched!!!!')
})


module.exports ={person: person}

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



var author=sequelize.define('author',{
    authorno: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    city:{
        type: Sequelize.TEXT,
        allowNull: false
    }
},

{
    timestamps: false,
    createdAt: false,
    updatedAt: false
    }

)

var book=sequelize.define('book',{
    bookno: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    category: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},

{
    timestamps: false,
    createdAt: false,
    updatedAt: false
    }

)

author.hasMany(book,{foreigney: 'authorno'})
book.belongsTo(author)

person.sync ({drop:false}).then(()=>{
    console.log('Person table synched!!!!')
})

author.sync ({drop:false}).then(()=>{
    console.log('Author table synched!!!!')
})

book.sync ({drop:false}).then(()=>{
    console.log('Book table synched!!!!')
})


module.exports ={person: person,author: author, book: book}

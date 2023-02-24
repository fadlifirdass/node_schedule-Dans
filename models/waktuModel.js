const {Sequelize} = require('sequelize')
const db = require('../config/database')

const {DataTypes} = Sequelize;

const Waktu = db.define('schedule',{
    waktu : DataTypes.DATE
},{
    freezeTableName:true
})

module.exports = Waktu;

//generate db
// (async()=>{
//     db.sync()
// })()
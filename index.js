const express = require('express')
const app = express()
const cron = require('node-cron')
const saveTime = require('./controllers/scheduleControllers')

(async()=>{
    try {
        cron.schedule('*/5 * * * *',()=>{
            console.log('Data tersimpan..')
            saveTime()
        })
    } catch (error) {
            console.log(error)
    }
})



app.listen(5000,()=>{console.log('Server run..')})

const Scheduler = require('../models/waktuModel')


const saveTime = async () => {
    try {
        const now = new Date()
        const result = await Scheduler.create({waktu : now})
        console.log('Waktu disimpan')
    } catch (error) {
        console.log(error)
    }
}

module.exports = saveTime;
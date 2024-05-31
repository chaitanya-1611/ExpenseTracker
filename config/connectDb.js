const mongoose = require('mongoose')
const colors = require('colors')

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Expense")
        console.log(`Server Runnign on ${mongoose.connection.host}`.bgCyan.white)
        
    } catch (error) {
        console.log(`${error}`.bgRed)
        
    }
}

module.exports = connectDb
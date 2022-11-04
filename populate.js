require('dotenv').config()

const mockDate = require('./mock-data.json')

const Job = require('./models/Job')

const connectDB = require('./db/connect')

const start = async(req,res)=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.create(mockDate)
        console.log("sucess!!!");
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

start()
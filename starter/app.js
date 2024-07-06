const express = require('express')
 const connectDB = require('./db/connect')
const tasks = require('./routes/tasks')
const app = express()
app.use(express.json())

require('dotenv').config()
app.use(express.static('./public'))

app.use('/api/v1/tasks',tasks)


//app.get('/api/v1/task') get all tasks
//app.post('/api/v1/task') create a new task
//app.get('/api/v1/task/:id') get a single task
//app.put('/api/v1/task/:id') update a task
//app.delete('/api/v1/task/:id') delete a task
const port = 3000
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch(error){
        console.log(error)
    }
}


start().then(r => console.log('connected to db'))


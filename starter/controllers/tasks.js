const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})//,find is used for every task in a document
        res.status(200).json({tasks})
    }
   catch (error){
       res.status(500).json({msg:error})
   }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)  //.create is used to create a new task
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}


const getTask = async (req, res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID}) //findOne is used to find a single task
        //if no task or id is found
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`})
        }
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }

}

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,

        }) //findOneAndUpdate is used to find a single task and update it
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`})
        }
        res.status(200).json({task})
}
catch (error){
    res.status(500).json({msg:error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})//findOneAndDelete is used to find a single task and delete it
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`})
        }
        res.status(200).json({task})
    }
    catch (error){
        res.status(500).json({msg:error})
    }
}


module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}


const express = require("express");
const fs = require('fs')

const router = new express.Router();


// GET tasks endpoint
router.get('/api/tasks', (req,res) => {
    try {
        const tasks = loadTasks()
        res.send(tasks)
    }catch(e){
        res.status(400).send(e)
    }
})

// Search tasks endpoint
router.get('/api/tasks/:search', (req,res) => {
    try {
        const tasks = loadTasks()
        const keyword = req.params.search
        const searchedTasks = tasks.filter((task) => task.title.includes(keyword) || task.description.includes(keyword))
        res.send(searchedTasks)
    }catch(e){
        res.status(400).send(e)
    }
})

// POST tasks endpoint
router.post('/api/tasks', (req,res) => {
    try {
        const tasks = loadTasks()
        let id = 1;
        console.log(tasks.length)
        if(tasks.length != 0) {
            id = tasks[tasks.length-1].id + 1
        }

        const newTask = {
            id,
            ...req.body
        }

        tasks.push(newTask)
        saveTasks(tasks)

        res.send(newTask)
    } catch (e) {
        res.status(400).send(e)
    }
})

// PUT tasks endpoint
router.put('/api/tasks/:id', (req,res) => {
    const id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) return res.status(400).send({ error: 'invalid updates!' })

    try {
        const tasks = loadTasks()
        const task = tasks.find(task => task.id == id)
        updates.forEach((update) => task[update] = req.body[update])
        saveTasks(tasks)

        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

// DELETE tasks endpoint
router.delete('/api/tasks/:id', (req,res) => {
    try {
        const id = req.params.id
        const tasks = loadTasks()
        const task = tasks.find((task) => task.id == id)
        const tasksToKeep = tasks.filter((task) => task.id != id)
        saveTasks(tasksToKeep)
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})



const loadTasks = () => { //general - to load the current state of notes from file
    try {
        const dataBuffer = fs.readFileSync('tasks.json') //read from the file (buffered data) machine lang
        const dataJSON = dataBuffer.toString() // transform the data to string (JSON data)
        return JSON.parse(dataJSON) //parse the data (transform json to js) to be able to access the keys of obj
    }catch(err){
        return []
    }
}


const saveTasks = (tasks) => { //general - to save the new state of notes to the file
    const dataJSON = JSON.stringify(tasks) // transform the js to json
    fs.writeFileSync('tasks.json', dataJSON) //write the data to the file
}

module.exports = router;
const router = require('express').Router();
const createTask = require('../controllers/task_create')
const getAllTask = require('../controllers/task_read')
const updateTask= require('../controllers/task_update')
const deleteTask = require('../controllers/task_delete')

router.get("/get-task", getAllTask)

router.post("/create-task", createTask)

router.put("/update-task", (req,res) => {
    console.log('Testeando PUT');
})

router.delete("/remove-task", (req, res) => {
    console.log('Testeando DELETE');
})

module.exports = router;
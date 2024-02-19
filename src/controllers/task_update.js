const Task = require('../models/task.model');

const updateTask = async (req,res) => {
    const { id } = req.params;

    const { titulo, completado } = req.body

    if(!id) {
        return res.status(400).json({
            msg:"No se ha proporcionado un ID",
            code:400,
        })
    }

    const taskChange = {
        titulo: titulo, 
        completado: completado
    }

    try {
        await Task.findByIdAndUpdate(id, taskChange)
        res.status(200).json({
            msg:"Tarea Actualizada",
            code:200,
            
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = updateTask; 
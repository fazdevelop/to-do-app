const Task = require('../models/task.model');

const createTask = async (req,res) => {

    const { titulo, completado  } = req.body;

    await Task.create(
            {
                titulo: titulo,
                completado: completado,
            }
        )

    res.status(201).json({
        msg: "Tarea creada exitosamente",
        code: 201
    })
};

module.exports = createTask
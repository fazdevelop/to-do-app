const Task = require("../models/task.model")

const getAllTask = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(200).json({
        code: 200,
        msg: "Lista de tareas",
        data: tasks,
      });
      
    } catch (error) {
      console.error('Error al obtener tareas:', error);
      res.status(500).json({
        code: 500,
        msg: 'Error interno del servidor',
      });
    }
  };

module.exports = getAllTask;
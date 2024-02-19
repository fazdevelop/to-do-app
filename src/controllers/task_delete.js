const Task = require("../models/task.model")

const deleteTask = async (req, res) => {
    const id = req.params.id

    try {
        const task = await Task.findByIdAndDelete(id);

        if(!task) {
            return res.status(400).json({
                msg:"No se ha proporcionado un ID",
                code:400,
            });
        }

        res.status(200).json({
            msg:`La tarea: ${id}, ha sido eliminado satisactoriamente`,
            code:200,
        });
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteTask;
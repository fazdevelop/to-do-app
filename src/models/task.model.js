const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
    titulo: String,
    completado: Boolean,
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
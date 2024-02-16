const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ToDoApp");
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection;
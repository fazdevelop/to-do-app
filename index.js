const app = require('./src/app/app.js')
const dbConnection = require('./src/database/conexion')
const port = 3000

app.listen(port, () => {
  console.log(`To Do App, running on: http://localhost:${port}`)
})

dbConnection();
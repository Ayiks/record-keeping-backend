const express = require('express')
const dotenv = require('dotenv')
const {databaseConnection} = require('./config/db')
const farmRoutes = require('./routes/farmRoute')
const cors = require('cors')

const app = express()
app.use(express.json())
dotenv.config()
databaseConnection()
app.use(cors())


const port = process.env.PORT || 3001

app.use('/api', farmRoutes)



app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
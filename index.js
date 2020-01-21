const express = require('express') // npm install --save express 
const app = express()
const port = 3025
const router = require('./config/routes')
const configureDB = require('./config/database')
const cors=require('cors')


configureDB()
app.use(express.json())
app.use(cors())
app.use('/', router)

app.get('/', (req , res) => {
    res.send('welcome to the Coxcomb app')
})

app.listen(port,() =>{
    console.log('listening on port', port)
})
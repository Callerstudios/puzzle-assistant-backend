const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const {readFileOut} = require('./fileCreator')

app.use(cors())
app.use(bodyParser.text())

app.get('/', (req, res)=>{
    res.send("Home Page")
})
app.get('/about', (req, res)=>{
    res.send("About Page")
})
app.get('/read', (req, res)=>{
    const fileName = req.query.fileName
    const result = readFileOut(fileName)
    res.send(result)
})

app.post('/', (req, res)=>{
    const receivedData = req.body
    console.log(`Received: ${receivedData}`);
    res.status(200).send("Data received")
})

app.all('*', (req, res)=>{
    res.send("Page not found")
})

app.listen(5000)

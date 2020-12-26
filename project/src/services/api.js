const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const request = require('http')
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/apt/add', (req, res) => {
    const existApt = getaptData()
    const aptData = req.body
    existApt.push(aptData)
    saveaptData(existApt);
})

app.get('/apt/list', (req, res) => {
    const apts = getaptData()
    res.send(apts)
})

app.delete('/apt/delete/:id', (req, res) => {
    const aptId = req.params.id
    const existUsers = getaptData()
    const filteredApts = existUsers.filter( apt => apt.id !== aptId )
    saveaptData(filteredApts)
   
})

const saveaptData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('database.json', stringifyData)
}

const getaptData = () => {
    const jsonData = fs.readFileSync('database.json')
    return JSON.parse(jsonData)    
}

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001')
})
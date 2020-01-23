const express = require('express')
const morgan =require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/contacts-db')

const db = mongoose.connection

db.on('error', (err) =>{
    console.log(err)
})

db.once('open', () => {
    console.log('database connection established')
})

const contactRoute = require('./api/routers/contact')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

PORT = process.env.PORT || 3000

app.use((req,res,next) => {
    console.log('I am a Middleware Function')
    next()
})

app.use('/api/contacts' , contactRoute)

app.get('/', (req,res) => {
    res.send('<h1>Hello world</h1>')
})


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})


const contacts = [
    {name: 'asdefew', email:'wrEFEWFRFR@GMAIL.COM'},
    {name: 'gRGADNB', email:'wADGWNBGN@GMAIL.COM'},
    {name: 'hfbdgnb', email:'DNGNDTGZNCN@GMAIL.COM'}
]
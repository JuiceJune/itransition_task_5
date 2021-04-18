const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const path = require('path')
require('dotenv').config()
const config = require('config')

const app = express()

app.use(express.json())

app.use('/api/auth', require('./routes/auth.routes'))

app.use('/api/users', require('./routes/user.routes'))

app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('PORT') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('MONGO_URI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT)
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
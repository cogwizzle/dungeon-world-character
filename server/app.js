const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, '..', 'client', 'www')))

app.listen(3000)

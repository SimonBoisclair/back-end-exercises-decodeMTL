const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("On the go!!!")})

app.listen(3001, () => console.log('Port 3001'))

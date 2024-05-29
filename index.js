const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const test = require('./routes/test')

app.use('/test', test)

app.post('/', (req, res) => {
    res.send('Hello Post')
})

app.get('/:s', (req, res) => {
    // console.log(req.params)
    // console.log(req.query)
    res.send(`hello  ${req.params.s}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.use(express.static('Portfolio'))

// app.get('/', (req, res) => {
//     res.send('Hello')
// })
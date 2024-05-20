// require('dotenv').config()

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req, res)=>{
    res.send('Shrutiswiftdotcom')
})
app.get('/login', (req, res)=>{
    res.send('<h4>Please login in at shrutiswift.com</h4>')
})
app.get('/youtube', (req, res)=>{
    res.send('<h2>Shrutiswift</h2>')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const router = express.Router()

router.use((res, req, next) => {
    console.log('time: ', Date.now())
    next()
})
router.get('/', (req, res) => {
    res.json({ a: 1, name: ["Shruti", "Sharma"] })
})

router.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, name: ["Shruti", "Sharma"] })
})

module.exports = router
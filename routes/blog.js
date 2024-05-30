const express = require('express')
const router = express.Router()
const path = require('path')
const vlog = require('../data/vlog')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})
router.get('/blog', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
    res.render('blogHome', {
        vlog: vlog
    });
})

router.get('/blogpost/:slug', (req, res) => {
    Myvlog = vlog.filter((e) => {
        console.log(req.params.slug)
        return e.slug == req.params.slug
    })
    console.log(Myvlog)
    // res.sendFile(path.join(__dirname, '../templates/blogpage.html'))
    res.render('blogpage', {
        title: Myvlog[0].title,
        content: Myvlog[0].content
    });
})

module.exports = router


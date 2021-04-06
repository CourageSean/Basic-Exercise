const express = require('express');
const navData = require('./data/nav.json')
const gallery = require('./data/gallery.json')
const app = express()


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('listening at:', 'http://localhost:3000');
})

app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Homepage', navData })
})

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About', navData })
})

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact', navData })
})

app.get('/team', (req, res) => {
    res.render('pages/team', { title: 'Team', navData })
})

app.get('/gallery', (req, res) => {
    res.render('pages/gallery', { title: 'Gallery', navData, gallery })
})

app.use('/404', (req, res) => {
    res.render('pages/404', { title: '404', navData })
})


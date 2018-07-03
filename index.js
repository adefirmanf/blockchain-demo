const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use('/', (req, res, next)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log("Port is listening on 3000")
})
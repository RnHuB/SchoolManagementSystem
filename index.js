const express = require('express')

const app = express()
app.set('view engine','pug')
app.set('views', 'view')

app.get('/', (req, res) =>{
res.render('home')
})
app.listen(8000)
const express = require('express');
const homeRoute = require('./routes/home')

const app = express()
const port = 3000
 
app.set ('view engine ','ejs');
app.use(express.static('public'))
app.use ('/',homeRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
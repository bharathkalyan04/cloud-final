var express = require('express');
// require('dotenv').config()
const path=require('path')
const expbs=require("express-handlebars")
var app = express();

const publicpath=path.join(__dirname,'../public')

app.use(express.static(publicpath))
const hbs =expbs.create({
    defaultLayout:'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    }, 
    
})
app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{res.render('start')})
app.get('/quiz',(req,res)=>{res.render('quiz')})
app.get('/end',(req,res)=>{res.render('end')})


const port=process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up on port '+port)
})
const express = require('express')
const morgan = require('morgan')

// express app

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('dev'))

app.listen(3000)
l
app.get('/',(req,res)=>{
res.render('index' ,{title:'home'})
    
})
app.get('/about',(req,res)=>{
    res.sendFile('./view/about.html',{root: __dirname})

})
app.get('/about-us',(req,res)=>{
    res.redirect('/about')

})
app.use((req,res)=>{

    res.sendFile('./view/404.html',{root: __dirname})

})
const express = require('express')

// express app

const app = express()

app.listen(3000)

app.get('/',(req,res)=>{

    res.send('Hello World')
})
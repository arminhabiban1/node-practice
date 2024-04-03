const fs = require('fs')
const readStream= fs.createReadStream('./blog1.txt',{encoding: 'utf8'})
const writeStream = fs.createWriteStream('./blog2.text')
// readStream.on('data',(buffer)=>{
    // console.log(buffer)
// 
// })
// 
readStream.pipe(writeStream
    
)

const express = require('express')
const app = express();
const http=require('http').createServer(app) 

const PORT = process.env.PORT||6060


http.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname + `/index.html`)
})

const io = require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log('connected');
})

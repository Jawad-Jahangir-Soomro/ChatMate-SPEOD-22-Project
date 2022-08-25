const express = require('express')
const app= express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config();
const cors = require('cors')
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;


app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello there ')
})
io.on('connection',socket=>{
    console.log("socket io works");
})
server.listen(PORT,()=>{
    console.log(`server is responding on http://localhost:${process.env.PORT}`);
})
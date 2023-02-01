const express = require('express')
const app= express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config();
const cors = require('cors')
const {Server} = require('socket.io')
const PORT = process.env.PORT || 3000;
app.use(cors());

const io = new Server (server,{
    cors : {
        origin:"http://localhost:3000",
        methods : ["GET","POST"],
    }
})
io.on('connection',(socket)=>{
    console.log("user connected");
    console.log(socket.id);
     socket.on('join',data=>{
        socket.join(data) 
        console.log(`user with the id ${socket.id} just joind the room : ${data}`);
     })

     socket.on('send_message',data=>{
        socket.to(data.room).emit('receive_message',data)
     })
    socket.on("disconnect",()=>{
        console.log(` ${socket.id} leaved the chat `);
    })
})
app.get('/',(req,res)=>{
    res.send('hello there ')
})



server.listen(PORT,()=>{
    console.log(`server is responding on http://localhost:${process.env.PORT}`);
})
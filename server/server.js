const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const port= 8000;

require('dotenv').config();

app.use(express.json()); 
app.use(express.urlencoded({
    extended: true
})); 

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
}));
app.use(cookieParser());

require('./config/mongoose.config');
require('./routes/post.routes')(app);
require('./routes/user.routes')(app);


const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

let users = []

io.on('connection', socket => {
    console.log(socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.on('join-server', username => {
        console.log('USERNAME',username);
        let newUser = {id:socket.id, username:username}
        users.push(newUser)
        console.log(users);
        io.emit('new-user-joined', users)
    })
    socket.on('send-message', data=>{
        console.log(data);
        io.emit('send-message-to-all-clients', data)
    })
})

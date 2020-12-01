var express = require('express');
var cors = require('cors');
var app     = express();

var server = require('http').Server(app);
//var io = new Server(server, { cors: { origin: '*' } });
var io = require('socket.io')(server, { cors: { origin: '*' } });

//app.use(cors());


io.on('connection', function(socket){
    console.log('Un usuario conectado...');
    socket.emit('evento prueba', 'Aquí hay un dato');
});

server.listen(3111, ()=>{
    console.log('El servidor esta escuchando en el puerto 3111');
});
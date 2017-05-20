'use strict';

const SocketIO = require('socket.io');

module.exports = function (server) {
    const io = SocketIO(server);

    io.on('connection', function (socket) {
        console.log(socket.id);

        socket.on('abc', function (a) {
            console.log(a);
        })
    });

    return io;
};
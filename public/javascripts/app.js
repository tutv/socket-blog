(function (io) {
    const socket = io.connect('/');
    socket.on('news', function (data) {
        console.log(data);
    });

    socket.emit('abc', 'hello');
})(io);
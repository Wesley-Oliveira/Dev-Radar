import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.7:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction){
     socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();

    /* Para verificar se realmente está havendo comunicação com o backend
    socket.on('message', text => {
        console.log(text);
    })*/
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
};
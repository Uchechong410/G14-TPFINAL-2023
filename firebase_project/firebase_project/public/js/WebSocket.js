const socket = io();

socket.on("mensaje-servidor", (data) => {
    console.log(data)
    console.log(socket.id);
});

function funcionPrueba() {
    socket.emit("mensaje-prueba",{mensaje: "hola"})
}
  
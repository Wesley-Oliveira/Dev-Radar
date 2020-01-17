
// Importando express, mongoose e routes
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// Criando conexão com o banco de dados mongo
mongoose.connect('mongodb+srv://admin:admin123@cluster0-gke9r.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Para liberar o acesso externo a todo tipo de aplicação
app.use(cors());
// Para o express entender que será utilizado JSON
app.use(express.json());
// Para poder utilizar as rotas exportadas
app.use(routes);

// Selecionando porta
server.listen(3333);
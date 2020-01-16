
// Importando express, mongoose e routes
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

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
app.listen(3333);
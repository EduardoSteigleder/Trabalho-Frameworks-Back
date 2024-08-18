const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const produtosRouter = require('./routes/produtos');
const movimentacoesRouter = require('./routes/movimentacoes');

app.use(cors()); // Permite CORS para todos os domínios// Outras configurações do servidor


app.use(bodyParser.json());

app.use('/api/produtos', produtosRouter); 
app.use('/api/movimentacoes', movimentacoesRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

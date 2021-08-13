const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/Tabelas');

// Contém as configurações do App.
const app = customExpress();

// Conexão com o MySQL.
conexao.connect((error) => {
  if(error) {
    console.log('Erro ao conectar no banco de dados.');
    console.error(error);

  // Caso a conexão com o banco de dados tenha sido bem sucedida,
  // será feita uma checagem e se necessário as tabelas serão criadas.
  // Após a criação das tabelas o servidor node será inicializado.
  } else {
    console.log('Banco de dados conectado com sucesso.');
    inicializarTabelas(conexao);
    executarApp();
  }
});


function inicializarTabelas(conexao) {
  Tabelas.init(conexao);
}

function executarApp() {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.');
  });
}


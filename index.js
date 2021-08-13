const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');

// Contém as configurações do App.
const app = customExpress();

// Conexão com o MySQL.
conexao.connect((error) => {
  if(error) {
    console.log('Erro ao conectar no banco de dados.');
    console.error(error);

  // Caso a conexão com o banco de dados tenha sido bem sucedida
  // será inicializado o App.
  } else {
    console.log('Banco de dados conectado com sucesso.');
    executarApp();
  }
});


function executarApp() {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.');
  });
}


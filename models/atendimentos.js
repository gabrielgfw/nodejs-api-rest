const conexao = require('../infraestrutura/conexao');

class Atendimento {
  adiciona(atendimento) {
    const query = 'INSERT INTO Atendimentos SET ?';

    conexao.query(query, atendimento, (erro, resultados) => {

    });

  }
}

module.exports = new Atendimento;
const Atendimento = require('../models/atendimentos');

module.exports = app => {

  app.get('/atendimentos', (req, res) => {
    res.send('você está na rota de atendimentos!')
  });

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento);
    res.send('Atendimento cadastrado com sucesso!');
  });
}

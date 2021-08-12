module.exports = app => {

  app.get('/atendimentos', (req, res) => {
    res.send('você está na rota de atendimentos!')
  });

  app.post('/atendimentos', (req, res) => {
    const result = req.body;
    res.send(`A mensagem foi: ${result.message}`);
  });
}

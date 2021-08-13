const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'gabrielgfw',
  password: '12345678',
  database: 'petshop'
});

module.exports = conexao;
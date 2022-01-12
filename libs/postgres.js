const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host:'localhost',
    port: 5432,
    user: 'gabs',
    password: 'dataBase01@',
    database: 'forumgs'
  });
  await client.connect()
  return client;
}

module.exports = getConnection;

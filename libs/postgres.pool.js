const { Pool } = require('pg');

const { config } = require('./../config/config');

//Para proteger las variables
const USER = encodeURIComponent(config.dbUser);
const PASSWORD =  encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//Instead of this:
//const pool = new Pool({
//    host:'localhost',
//    port: 5432,
//    user: 'gabs',
//    password: 'dataBase01@',
//    database: 'forumgs'
//  })

const pool = new Pool({ connectionString: URI});

  module.exports = pool;

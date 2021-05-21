require('dotenv').config();

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: 'pagcine',
  host: 'localhost',
  dialect: 'mysql'
}

module.exports = config

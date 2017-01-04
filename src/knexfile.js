require('dotenv').config();
module.exports = {

  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/cloke'
    //,
    //debug:true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

// Update with your config settings.
require('dotenv/config');
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DEV,
      acquireConnectionTimeout: 10000
    },    
    migrations :{
      directory: './src/database/migrations'
    },
    pool: {
      max: 20
    },
    useNullAsDefault: true    
  },
  
  test: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_TEST,
      acquireConnectionTimeout: 10000
    },    
    migrations :{
      directory: './src/database/migrations'
    },
    pool: {
      max: 20
    },
    useNullAsDefault: true    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations :{
      directory: './src/database/migrations'
    },
    pool: {
      max: 20
    }
  }

};

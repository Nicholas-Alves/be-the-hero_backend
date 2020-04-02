// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'sql',
      host: 'localhost',
      port: 5432,
      database: 'dbBeTheHero'
    },    
    migrations :{
      directory: './src/database/migrations'
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    useNullAsDefault: true    
  },
  
  test: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'sql',
      host: 'localhost',
      port: 5432,
      database: 'dbBeTheHeroTest'
    },    
    migrations :{
      directory: './src/database/migrations'
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    useNullAsDefault: true    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations :{
      directory: './src/database/migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};

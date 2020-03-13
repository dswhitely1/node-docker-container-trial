// Update with your config settings.

require('dotenv').config();

const localPg = {
  host: process.env.DB_HOST,
  database:
    process.env.DB_ENV === 'development'
      ? process.env.DB_NAME
      : process.env.DB_TEST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const dbConnection = process.env.DATABASE_URL || localPg;

const dbObj = {
  client: 'pg',
  connection: dbConnection,
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool: {
    min: 2,
    max: 10
  }
}

module.exports = {
  development: {
    ...dbObj
  },
  testing: {
    ...dbObj
  },
  production: {
    ...dbObj
  }
}

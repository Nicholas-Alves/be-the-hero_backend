const knex = require('knex');
const configuration = require('../../knexfile');

var config = null;

switch (process.env.NODE_ENV) {
    case 'test':
        config = configuration.test;
        break;
    case 'production':
        config = configuration.production;
        break;
    default:
        config = configuration.development;
        break;
}

const connection = knex(config);

module.exports = connection;
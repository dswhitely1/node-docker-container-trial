const bcrypt = require('bcryptjs');
const password = bcrypt.hashSync('password', 10);

exports.seed = knex => {
  return knex('users').insert([
    {
      username: 'Test1', password
    },
    {
      username: 'Test2', password
    }
  ])
}

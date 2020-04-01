
exports.up = function(knex) {
    return knex('ong').del();
};

exports.down = function(knex) {
  
};

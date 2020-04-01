
exports.up = function(knex) {
    return knex('incident').del();
};

exports.down = function(knex) {
  
};

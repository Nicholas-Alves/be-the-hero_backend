const crypto = require('crypto');

module.exports = async function generateUniqueId(connection){
    let generatedId, id = [0];    
    
    while(id.length != 0){
        generatedId = crypto.randomBytes(4).toString('HEX');

        try {
            await connection.transaction(async trx => {
                id = await trx('ong').select('id').where('id', generatedId);
            });
        } catch (error) {
            console.error(error);
        }
    }

    return generatedId;
}
const crypto = require('crypto');

module.exports = async function generateUniqueId(connection){
    let generatedId, id = [0];    
    
    while(id.length != 0){
        generatedId = crypto.randomBytes(4).toString('HEX');
        id = await connection('ong').select('id').where('id', generatedId);        
    }

    return generatedId;
    // return crypto.randomBytes(4).toString('HEX');
}
const connection = require('../database/connection');

module.exports = {
    async index (req, res){
        try {
            await connection.transaction(async trx => {
                const ong_id = req.headers.authorization; //ID da ONG logada        
                const incidents = await trx('incident').where('ong_id', ong_id).select('*');
                return res.json(incidents)
            });
        } catch (error) {
            console.error(error);
        }
    }
}
const connection = require('../database/connection');

module.exports = {
    async create (req, res){
        try {
            await connection.transaction(async trx => {
                const { id } = req.body;
        
                const ong = await trx('ong').where('id', id).select('name').first();
        
                if(!ong) return res.status(406).send({ error: 'No ONG found with this ID.' });
                
                return res.json(ong);
            });
        } catch (error) {
            console.error(error);
        }
    }
}
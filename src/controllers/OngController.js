const connection = require('../database/connection');


const generateUniqueId = require('../utils/generateUniqueId');


module.exports = {

    //Listagem de todas as ongs no banco
    async index (req, res) {
        try {         
            await connection.transaction(async trx => {
                const ongs = await trx('ong').select('*');
                return res.json(ongs);
            });            
        } catch (error) {
            console.error(error);
        }
    
    },

    //Criação de uma nova ong no banco
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = await generateUniqueId(connection);

        try {
            await connection.transaction(async trx => {
                await trx('ong').insert({
                    id,
                    name,
                    email,
                    whatsapp,
                    city,
                    uf
                });

                return res.json({ id });
            })
        } catch (error) {
            console.error(error);
        }        
    }
}
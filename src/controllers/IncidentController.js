const connection = require('../database/connection');

module.exports = {
    async index (req, res){
        try {
            await connection.transaction(async trx => {
                const { page = 1 } = req.query;
        
                const [{count}] = await trx('incident').count();
                
                const incidents = await trx('incident')
                    .join('ong', 'ong.id', '=', 'incident.ong_id')
                    .limit(5)
                    .offset((page - 1) * 5)
                    .select(['incident.*',
                        'ong.name',
                        'ong.email',
                        'ong.whatsapp',
                        'ong.city',
                        'ong.uf'
                    ]);
                
                res.header('X-Total-Count', count);
                return res.json(incidents);
            });
        } catch (error) {
            console.error(error);
        }
    },
    
    async create (req, res){
        try {
            await connection.transaction(async trx => {
                const { title, description, value } = req.body; //ID do Incident
                const ong_id = req.headers.authorization; //ID da ONG logada
        
                await trx('incident').insert({
                    title,
                    description,
                    value,
                    ong_id
                })
        
                const [{max: id}] = await trx('incident').max('id');
        
                return res.json({ id });
            });
        } catch (error) {
            console.error(error);
        }
    },

    async delete (req, res){
        try {
            await connection.transaction(async trx => {
                const { id } = req.params; //ID do Incident
                const ong_id = req.headers.authorization; //ID da ONG logada
        
                const incident = await trx('incident').where('id', id).select('ong_id').first();
                
                if(incident.ong_id != ong_id) return res.status(401).json({ error: 'Operation not permited.' });
                
                await trx('incident').where('id', id).delete();
        
                return res.status(204).send();
            });
        } catch (error) {
            console.error(error);
        }
    }
}
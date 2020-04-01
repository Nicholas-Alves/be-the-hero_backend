const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Session', () => {    

    beforeAll(async () => {
        await connection.migrate.latest();
    });

    afterEach(async () => {
        await connection('incident').del();
        await connection('ong').del();        
    });

    afterAll(async () => {
        await connection.destroy();
    });

    //LOGIN
    it('should be able to realize login', async () => {
        let res = await req(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "contato@gmail.com",
                whatsapp: "+5511999999999",
                city: "São Paulo",
                uf: "SP"	
            });

        const { id } = res.body;

        res = await req(app)
            .post('/sessions')
            .send({
                id
            });
        
        expect(res.body).toHaveProperty('name');
    });
})
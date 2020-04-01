const generateUniqueId = require('../../src/utils/generateUniqueId');
const connection = require('../../src/database/connection');

describe('Generate Unique ID', () => {

    beforeAll(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    
    it('should generate an unique ID', async () => {
        const id = await generateUniqueId(connection);

        expect(id).toHaveLength(8);
    })
});
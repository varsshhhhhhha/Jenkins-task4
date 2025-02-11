const request = require('supertest');
const { app, server } = require('../server');

describe('GET /', () => {
    it('should return "Hello, Jenkins Pipeline!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, Jenkins Pipeline!');
        expect(response.statusCode).toBe(200);
    });

    afterAll(() => {
        server.close(); // Prevents open handles
    });
});

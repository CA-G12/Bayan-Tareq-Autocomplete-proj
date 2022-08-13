const supertest = require('supertest');
const router = require('../src/router');

describe('Test home handler',done =>{
    test('index.html file', () => {
        supertest(router)
          .get('/')
          .expect(200)
          .expect("content-type", "/html/")
          .end((err, res) => {
            if (err) return done(err)
            expect(res.statusCode).toBe(200);
            done();
          })
      });
})
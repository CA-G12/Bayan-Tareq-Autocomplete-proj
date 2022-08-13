const supertest = require('supertest');
const router = require('../src/router');


describe('Test public handler', done => {
  test('css file', () => {
    supertest(router)
      .get('/public/page2/style.css')
      .expect(200)
      .expect("content-type", "/css/")
      .end((err, res) => {
        if (err) return done(err)
        expect(res.statusCode).toBe(200);
        done();
      })
  });
  test('js file', () => {
    supertest(router)
      .get('/public/page2/script.js')
      .expect(200)
      .expect("content-type", "text/javascript")
      .end((err, res) => {
        if (err) return done(err)
        expect(res.statusCode).toBe(200);
        done();
      })
  });
 test("png img",()=>{
  supertest(router)
  .get("../public/img/logo1.png")
  .expect(200)
  .expect("content-type","image/png")
  .end((err,res)=>{
    if(err) return done(err)
    expect(res.status).toBe(200)
    done();
  })
 })
});

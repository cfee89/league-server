import { expect, server, BASE_URL } from './setup';
describe('Leagues', () => {
  it('get leagues', done => {
    server
      .get(`${BASE_URL}/leagues`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.leagues).to.be.instanceOf(Array);
        res.body.leagues.forEach(m => {
          expect(m).to.have.property('name');
          expect(m).to.have.property('price');
          expect(m).to.have.property('lat');
          expect(m).to.have.property('long');
        });
        done();
      });
  });

  it('posts add league', done => {
    const data = { leagueName: 'expectedName', price: 3000, lat: 43.11, long: 73.21 };
    server
      .post(`${BASE_URL}/add-league`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.leagues).to.be.instanceOf(Array);
        res.body.leagues.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('name', data.leagueName);
          expect(m).to.have.property('price', data.price);
          expect(m).to.have.property('lat', data.lat);
          expect(m).to.have.property('long', data.long);
        });
        done();
      });
  });
});


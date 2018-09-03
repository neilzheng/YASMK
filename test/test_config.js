const path = require('path');
const request = require('supertest');
const { expect } = require('chai');
const MakeServer = require('./server');

describe('test middleware', () => {
  let agent;
  let server;

  before(() => {
    server = MakeServer(path.join(__dirname, './settings'));
    agent = request(server);
  });

  it('should contains config object with content from file', async () => {
    const res = await agent.get('/');
    expect(res.status).to.eq(200);
    expect(res.body).to.not.be.null;
    expect(res.body.apple).to.be.not.null;
    expect(res.body.apple.color).to.eq('red');
    expect(res.body.apple.shape).to.eq('round');
    expect(res.body.banana).to.be.not.null;
    expect(res.body.banana.color).to.eq('yellow');
  });

  after(() => {
    server.close();
  });
});

const Koa = require('koa');
const Settings = require('../index.js');

module.exports = (cfgDir) => {
  const app = new Koa();

  app.use(Settings(cfgDir));

  app.use((ctx) => {
    ctx.body = ctx.settings;
  });

  return app.listen();
};

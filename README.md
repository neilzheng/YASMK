# YASMK
Yet Another Settings Middleware for Koa

# use this middleware

store settings in files

```js
// ./settings/apple.js
module.exports = {
  color: 'red',
  shape: 'round'
};
```

```js
// banana.js
module.exports = {
  color: 'yellow'
};
```

```js
// use middle ware
const Settings = require('yasmk');
const Koa = require('koa');
const path = require('path');

const app = new Koa();

app.use(Settings(path.join(__dirname, './settings')));
```

# get settings

```js
// in your own middleware
app.use((ctx, next) => {
  console.log(ctx.Settings.apple.color);
  console.log(ctx.Settings.apple.shape);
  console.log(ctx.Settings.banana.color);
});
```

# License

  MIT

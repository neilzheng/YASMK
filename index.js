const glob = require('glob');
const path = require('path');

module.exports = (cfgDir) => {
  if (typeof cfgDir !== 'string') throw TypeError('cfgDir must be string');
  const settingsDir = cfgDir.endsWith('/') ? cfgDir : `${cfgDir}/`;
  const files = glob.sync(`${settingsDir}*.js`);

  const settings = {};
  files.forEach((file) => {
    const objName = path.basename(file, '.js');
    const theObject = require(file);
    if (typeof theObject !== 'object') {
      throw TypeError('config file export must be object');
    }
    settings[objName] = theObject;
  });

  return (ctx, next) => {
    ctx.Settings = settings;
    return next();
  };
};

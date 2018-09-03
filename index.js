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
    settings[objName] = theObject;
  });

  return (ctx, next) => {
    ctx.settings = settings;
    return next();
  };
};

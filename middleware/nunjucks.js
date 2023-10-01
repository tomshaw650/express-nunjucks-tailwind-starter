const nunjucks = require('nunjucks');

module.exports = (app) => {
  const paths = ['./src/views'];

  const options = {
    express: app,
    lstripBlocks: true,
    trimBlocks: true,
  };

  nunjucks.configure(paths, options);
  
  app.set('view engine', 'njk');
};

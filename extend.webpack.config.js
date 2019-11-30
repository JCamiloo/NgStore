const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
    //   reportProvider() {
    //     return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
    //   },
      GA: '207149108',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
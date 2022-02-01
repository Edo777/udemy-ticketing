module.exports = {
  webpackDevMiddleware: (confid) => {
    confid.watchOptions.poll = 300;
    return setConfig;
  },
};

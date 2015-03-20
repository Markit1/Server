var config = {
  local: {
    mode: 'dev',
    port: 8888,
    db: 'MarkIt_test'
  },
  dev: {
    mode: 'dev',
    port: 8888,
    db: 'MarkIt_test'
  },
  // Labintec
  production: {
    mode: 'production',
    port: 8453,
    db: 'MarkIt'
  }
};
module.exports = function (mode) {
  return config[mode || process.argv[2] || 'dev'] || config.local;
};
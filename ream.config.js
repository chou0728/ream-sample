module.exports = {
    entry: 'main.js',
    server: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 4000,
    extract: true
}
  
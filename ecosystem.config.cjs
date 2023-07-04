module.exports = {
  apps: [
    {
      name: 'app1',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'dist',
        PM2_SERVE_PORT: 3000,
      },
    },
  ],
};

module.exports = {
  apps: [
    {
      name: 'Nest App',
      script: './dist/main.js',
      instances: '1',
      exec_mode: 'cluster',
      autorestart: true,
    },
    {
      name: 'CRON JOB',
      script: './dist/tasks/worker.js',
      instances: "1",
    },
  ],
};

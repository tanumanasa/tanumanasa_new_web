// PM2 process file — `pm2 start ecosystem.config.cjs` (after `npm run build`)
module.exports = {
  apps: [
    {
      name: 'tanumanasa-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1, // SQLite: keep a single instance
      env: { NODE_ENV: 'production', PORT: 3000 },
      max_memory_restart: '512M',
    },
  ],
};

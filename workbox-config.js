module.exports = {
  swDest: 'build/sw.js',
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: { cacheName: 'offlineCache' },
    },
  ],
};

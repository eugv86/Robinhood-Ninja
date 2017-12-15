module.exports = {
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'bower_components/webcomponentsjs/*',
  ],
  navigateFallback: 'index.html',
  runtimeCaching: [
    {
      urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
      handler: 'fastest',
      options: {
        cache: {
          name: 'webcomponentsjs-polyfills-cache',
        },
      },
    },
  ],
};

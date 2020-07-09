module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  install: ['bulmaswatch/lux/bulmaswatch.min.*'],
  devOptions: {
    bundle: false,
  },
};

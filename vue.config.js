const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-vuex-vue-router-todo-app/'
    : '/',
  indexPath: "./dist/index.html",
});

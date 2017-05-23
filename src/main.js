// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';

import 'iview/dist/styles/iview.css';

// 路由挂载
import App from './App';
// 路由列表
import routes from './routes';
// 引入vuex
import store from './store';

// 重置样式
// import './vendor/normalize/normalize.min.css';
// iView样式

// 全局样式
// import './style/common.styl';
// import api from './api/base';

// window.$ = $;
// window.jQuery = $;
Vue.use(VueRouter);
Vue.use(iView);

Vue.config.productionTip = false;
// 开启debug模式
Vue.config.debug = true;
Vue.config.devtools = true;

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});

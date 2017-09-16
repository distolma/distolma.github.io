// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon';
import VueProgressiveImage from 'vue-progressive-image';

import App from './App';

import store from './store';

import './scss/style.scss';

Vue.use(VueProgressiveImage, {
  delay: 0,
});

Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});

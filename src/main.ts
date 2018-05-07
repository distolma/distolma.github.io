import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import store from './store';
import './assets/styles.scss';

Vue.use(VueProgressiveImage, { delay: 0 });
Vue.use(VueAnalytics, { id: 'UA-78571646-2' });
Vue.component('Icon', require('vue-awesome/components/Icon').default);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

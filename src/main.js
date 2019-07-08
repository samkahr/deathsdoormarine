import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Pics from "@/views/Pics.vue";
import Home from "@/views/Home.vue";
import VueScrollTo from 'vue-scrollto';
import VueGtm from 'vue-gtm';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueScrollTo);
Vue.use(VueLazyload);
Vue.use(VueGtm, {
  id: 'GTM-P5PX2CQ', 
  enabled: true, 
  debug: true, 
  vueRouter: router, 
});

const routes = [
  { path: '/pics', 
  component: Pics,
  meta: { title: 'Death\'s Door Marine' },
},
  { path: '/', 
  component: Home,
  meta: { title: 'Death\'s Door Marine'},
 }
];

const router = new VueRouter ({
  routes,
  mode: 'history'
})

const DEFAULT_TITLE = 'Death\'s Door Marine';

router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  render: h => h(App),
}).$mount('#app')

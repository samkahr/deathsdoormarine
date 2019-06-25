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

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueScrollTo);

const routes = [
  { path: '/pics', component: Pics },
  { path: '/', component: Home }
];

const router = new VueRouter ({
  routes,
  // mode: 'history'
})

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  render: h => h(App),
}).$mount('#app')

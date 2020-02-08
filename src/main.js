import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./util/router";
import VueResource from "vue-resource";
import moment from "moment-timezone";

import "./style.scss";

// Vue Router
Vue.use(VueRouter);
const router = new VueRouter({ routes });

// Moment.js library
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", { value: moment });

// Bus setup
const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", { value: bus });

// Vue Resource
Vue.use(VueResource);

// Custom Vue Directive
Vue.directive("tooltip", {
  bind(el, bindings) {
    console.log(el);
  }
});

// General Vue setup
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

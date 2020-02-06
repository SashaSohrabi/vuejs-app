import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./util/router";
import VueResource from "vue-resource";
import moment from "moment-timezone";

import "./style.scss";


Vue.use(VueRouter);
const router = new VueRouter({ routes });


moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", { value: moment });


const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", { value: bus });


Vue.use(VueResource);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

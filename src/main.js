import Vue from "vue";
import App from "./App.vue";
import "./style.scss";
import VueResource from "vue-resource";

import moment from "moment-timezone";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", { value: moment });

Vue.use(VueResource);

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", { value: bus });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

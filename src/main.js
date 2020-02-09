import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./util/router";
import VueResource from "vue-resource";
import moment from "moment-timezone";
import { addClass, removeClass } from "./util/helpers";

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
let mouseOverHandler = function(event) {
  let span = event.target.parentNode.getElementsByTagName("span")[0];
  addClass(span, "tooltip-show");
};

let mouseOutHandler = function(event) {
  let span = event.target.parentNode.getElementsByTagName("span")[0];
  removeClass(span, "tooltip-show");
};

Vue.directive("tooltip", {
  bind(el, bindings) {
    let span = document.createElement("span");
    let text = document.createTextNode(
      `Seats available: ${bindings.value.seats}`
    );
    span.appendChild(text);
    addClass(span, "tooltip");
    el.appendChild(span);
    let div = el.getElementsByTagName("div")[0];
    div.addEventListener("mouseover", mouseOverHandler);
    div.addEventListener("mouseout", mouseOutHandler);
    div.addEventListener("touchstart", mouseOverHandler);
    div.addEventListener("touchend", mouseOutHandler);
  },
  unbind(el) {
    let div = el.getElementsByTagName("div")[0];
    div.removeEventListener("mouseover", mouseOverHandler);
    div.removeEventListener("mouseout", mouseOutHandler);
    div.removeEventListener("touchstart", mouseOverHandler);
    div.removeEventListener("touchend", mouseOutHandler);
  }
});

// General Vue setup
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

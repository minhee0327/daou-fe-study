import Vue from "vue";
import App from "./App.vue";
import ChartPlugin from "./plugin/ChartPlugin";

Vue.use(ChartPlugin); // ==  Vue.prototype.$_Chart = Chart;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

import { Chart } from "chart.js";
import { VueConstructor } from "vue";

export default {
  install(Vue: VueConstructor) {
    Vue.prototype.$_Chart = Chart;
  },
};

//new this.$_Chart(); 를 생성할 수 있게 됨

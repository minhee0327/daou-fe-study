import Vue from "vue";
import Chart = require("chart.js");

// 2. 보충하고자 하는 타입이 있는 파일을 지정하세요.
//    Vue의 constructor type은 types/vue.d.ts에 있습니다.
declare module "vue/types/vue" {
  // 3. Vue에 보강할 내용을 선언하세요.
  interface Vue {
    $_Chart: Chart;
  }
}

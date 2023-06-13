<template>
  <div>
    <canvas id="myChart" ref="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { LinearScale, registerables } from "chart.js";
import { MyVueRefs } from "@/types";

export default (Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
  mounted() {
    // const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const canvas = this.$refs.myChart;
    const ctx = canvas.getContext("2d");

    this.$_Chart.register(...registerables);

    if (ctx === null) return;
    const chart = new this.$_Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      plugins: [LinearScale],
    });
  },
});
</script>

<style scoped></style>

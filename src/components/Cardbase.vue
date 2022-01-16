<template>
  <div class="card" v-for="obj in this.objetoCard" :key="obj">
    <div class="container">
      <div class="head">
        <h4>{{ obj.nome }}</h4>
      </div>
      <div class="corpo">
        <div id="chart" v-if="obj.grafico === 'grafico_barra'">
          <apexchart
            type="bar"
            height="150"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { comandoCard } from "../commands/cards";
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    return {
      objetoCard: [],
      serie: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          id: "produto",
        },
        xaxis: {
          categories: [
            "1,00",
            "1,20",
            "1,50",
            "1,80",
            "2,00",
            "2,20",
            "2,50",
            "3,20",
          ],
        },
      },
      series: [
        {
          name: "produto",
          data: [10, 12, 7, 7, 20, 4, 8, 6],
        },
      ],
    };
  },
  methods: {
    valoresCards() {
      let objCard = comandoCard();
      for (let i = 0; i < objCard.cards.length; i++) {
        this.objetoCard.push(objCard.cards[i]);
      }
    },
  },
  created() {
    this.valoresCards();
  },
};
</script>

<style scoped>
.card {
  width: 400px;
  height: 220px;
  padding: 5px;
  margin: 25px 10px 5px 0px;
  border-radius: 8px;
  background: #ebebeb;
  box-shadow: 0 0 1em rgb(207, 207, 207);
}

.head {
  padding-bottom: 10px;
}

h4::before{
  content: "";
  padding:0px 2px ;
  margin-right: 2px;
  background-color: lightseagreen;
}
</style>

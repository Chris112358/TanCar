<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

import { onMounted } from 'vue';
import { useLiterChartStore } from '../../stores/chartStore';
import { useRoute } from 'vue-router';

const LiterChartStore = useLiterChartStore()

const route = useRoute()

const carId = Number(route.params.carId)

onMounted(() => {
  LiterChartStore.fetchChart(carId)
})

//console.log(LiterChartStore.chart)


ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const options = {
  responsive: true,
  maintainAspectRatio: true
}

/*const data = {
  labels: ['Jan','Feb','Mar','Apr'],
  datasets:[
    {
      label:'Fuel consumption',
      data:[7.1,6.9,7.3,7.0]
    }
  ]
}*/
</script>

<template>
  <div class="chart-wrapper">
  <Line :data="LiterChartStore.chart" :options="options"/>
  </div>
</template>

<style scoped>

.chart-wrapper {
  position: relative;
  width: 100%;
  max-width: 100%;
  
}

</style>
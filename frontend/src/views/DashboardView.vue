<script setup lang="ts">

import FuelChart from '../components/charts/FuelChart.vue';
import PriceChart from '../components/charts/PriceChart.vue';




</script>



<template>

<h1>Dashboard</h1>

<div class="graphs">

  <div class="graph">
    <h2>Fuel Consumption Graph</h2>
    <FuelChart />
  </div>
   

  <div class="graph">
    <h2>Fuel Price Graph</h2>
    <PriceChart />
  </div>
</div>

</template>



<style scoped>

.graphs{
  display:grid;
  gap:20px;
  background:#ecf0f1;

  grid-template-columns:1fr;
  padding: 16px;
}

.graph{
  background: white;
  border-radius: 12px;
  padding: 16px;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.graph h2 {
  margin: 0 0 12px 0;
  font-size: 1.1rem;
  color: #2c3e50;
}


@media (min-width:900px){

.graphs{
grid-template-columns:1fr 1fr;
}
}

</style>

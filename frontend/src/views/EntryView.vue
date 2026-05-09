<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFuelStore} from '../stores/fuelStore'
import AddFuelModal from '../components/entrys/AddFuelModal.vue'
import type { NewFuelEntry } from '../types/fuel'

const route = useRoute()
const fuelStore = useFuelStore()

const showModal = ref(false)

const carId = Number(route.params.carId)

onMounted(() => {
  fuelStore.fetchFuel(carId)
})

function saveFuel(data:NewFuelEntry){

  fuelStore.addFuel2(
    carId,
    data
  )

  showModal.value = false
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

</script>

<template>

 <div class="page"> 

<h1>Fuel Entries</h1>

<div class="fuel-list">

<div
v-for="fuel in fuelStore.fuelEntries"  
:key="fuel.id"
class="fuel-card"
>

<div>{{ formatDate(fuel.date) }}</div>
<div>{{fuel.liters}} L</div>
<div>{{fuel.mileage}} km</div>

</div>

</div>

<AddFuelModal
v-if="showModal"
@close="showModal=false"
@save="saveFuel"
/>

<button class="fab" @click="showModal=true">
+
</button>

</div>

</template>

<style scoped>

.page {
  display: flex;
  flex-direction: column;

  height: 80vh;
  overflow: hidden;
}

.fuel-list{
display:flex;
flex-direction:column;
gap:10px;

overflow-y: auto;
flex: 1;

padding-right: 4px;

}

.fuel-card{
padding:14px;
background:#ecf0f1;
border-radius:10px;
color: black;
}

.add{
padding:10px;
}

.fab{

position:fixed;
bottom:80px;
right:20px;
width:60px;
height:60px;
border-radius:50%;
background:#3498db;
color:white;
font-size:28px;
border:none;
box-shadow:0 4px 10px rgba(0,0,0,0.3);

}

/* Desktop */

@media (min-width:900px){

.fab{
bottom:60px;
}

}

/* Mobile */

@media (max-width:899px){

.page{
  padding-top: -20px;
  padding-bottom: 70px;
}

}

</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCarStore } from '../stores/carStore'
import AddCarModal from '../components/cars/AddCarModal.vue'

const carStore = useCarStore()
const showModal = ref(false)

onMounted(() => {
  carStore.fetchCars()
})

</script>

<template>

<h2>Select Car</h2>

<div class="card-grid">

  <router-link
    v-for="car in carStore.cars"
    :key="car.id"
    :to="'/entry/' + car.id"
    class="card"
  >
    {{ car.name }}
  </router-link>

  <button class="card add" @click="showModal=true">
    +
  </button>

</div>

<AddCarModal
  v-if="showModal"
  @close="showModal=false"
/>

</template>

<style scoped>

.card-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr); /*grid-template-columns:repeat(auto-fill,minmax(140px,1fr));*/
  gap:20px;
}

.card{
padding:30px;
background:white;
border-radius:12px;
box-shadow:0 4px 12px rgba(0,0,0,0.08);
text-align:center;
font-weight:600;
cursor:pointer;
transition:all 0.2s;
}

@media (min-width:700px){

.card-grid{
grid-template-columns:repeat(3,1fr);
}

}

@media (min-width:1100px){

.card-grid{
grid-template-columns:repeat(5,1fr);
}

}

.card:hover{
transform:translateY(-4px);
box-shadow:0 8px 18px rgba(0,0,0,0.15);
}

.add{
  font-size:28px;
}

</style>
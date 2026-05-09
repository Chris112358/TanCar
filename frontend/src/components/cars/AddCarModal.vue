<script setup lang="ts">
import { ref } from 'vue'
import { useCarStore } from '../../stores/carStore'

const emit = defineEmits<{
  (e:'close'): void
}>()

const carStore = useCarStore()

const name = ref('')

function addCar(){  
  if(!name.value) return
  carStore.addCar2(name.value)  //changed here from carStore
  emit('close')
}
</script>

<template>

<div class="overlay">

  <div class="modal">

    <h3>Add Car</h3>

    <input v-model="name" placeholder="Car name"/>

    <div class="buttons">
      <button @click="addCar">Add</button>
      <button @click="$emit('close')">Cancel</button>
    </div>

  </div>

</div>

</template>

<style scoped>

.overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  align-items:center;
  justify-content:center;
}

.modal{
  background:white;
  padding:20px;
  border-radius:10px;
  width:300px;
}

.buttons{
  margin-top:10px;
  display:flex;
  justify-content:space-between;
}

</style>
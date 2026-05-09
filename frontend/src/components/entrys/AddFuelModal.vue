<script setup lang="ts">

import { ref } from 'vue'
import type { NewFuelEntry } from '../../types/fuel'

const emit = defineEmits<{
  (e:'close'): void
  (e:'save', data: NewFuelEntry): void
}>()

const liters = ref<number|null>(null)
const price = ref<number|null>(null)
const mileage = ref<number|null>(null)

function save(){

  emit('save',{
    liters:liters.value ?? 0,
    price:price.value ?? 0,
    mileage:mileage.value ?? 0
  })

}

</script>

<template>

<div class="overlay">

<div class="modal">

<h3>Add Fuel Entry</h3>

<input v-model="liters" type="number" placeholder="Liter"/>

<input v-model="price" type="number" placeholder="Total Price"/>

<input v-model="mileage" type="number" placeholder="Total km"/>

<div class="buttons">

<button @click="save">Save</button>

<button @click="$emit('close')">Cancel</button>

</div>

</div>

</div>

</template>

<style scoped>

.overlay{
position:fixed;
inset:0;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
}

.modal{
background:white;
color: black;
padding:20px;
border-radius:12px;
width:320px;
display:flex;
flex-direction:column;
gap:10px;
}

.buttons{
display:flex;
justify-content:space-between;
margin-top:10px;
}

</style>
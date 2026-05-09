<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const carId = Number(route.params.carId)



</script>

<template>

<aside class="menu">

  <RouterLink to="/">Cars</RouterLink>

  <RouterLink :to="`/entry/${carId}`">Entries</RouterLink>

  <RouterLink :to="`/dashboard/${carId}`">Dashboard</RouterLink>

  <RouterLink :to="`/settings/${carId}`">Settings</RouterLink>

</aside>

</template>

<style scoped>

.menu{
  width:200px;
  min-width:200px;
  background:#ecf0f1;
  display:flex;
  flex-direction:column;
  padding:10px;
  width:200px;
  transform:translateX(0);
  transition:transform 0.25s ease;

  position:fixed;
  left:0;
  top:64px;
  bottom:0;
}

.menu.closed{
transform:translateX(-100%);
}

.menu a{
  margin-bottom:10px;
  text-decoration:none;
}

/* MOBILE */
@media (max-width: 899px){
  .menu{
    display:none;
  }
} 

</style>
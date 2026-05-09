<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const carId = Number(route.params.carId)
</script>

<template>

<nav class="bottom-nav">

<RouterLink to="/">Cars</RouterLink>

<RouterLink :to="`/dashboard/${carId}`">Dashboard</RouterLink>  

<RouterLink :to="`/entry/${carId}`">Fuel</RouterLink> 

<RouterLink to="/settings">Settings</RouterLink>

</nav>

</template>

<style scoped>

.bottom-nav{
position:fixed;
bottom:0;
left:0;
right:0;
height:60px;
background:white;
border-top:1px solid #ddd;
display:flex;
justify-content:space-around;
align-items:center;
}

@media (min-width:900px){

    .bottom-nav{
    display:none;
    }

}

</style>
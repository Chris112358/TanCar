<script setup lang="ts">


</script>

<template>

<header class="header">

  <img src="/src/assets/logo.svg" class="logo"/>

  <h1 class="title">
    FuelTrack
  </h1>

</header>

</template>

<style scoped>

.header{
  display:flex;
  align-items:center;
  padding:10px 16px;
  background:#2c3e50;
  color:white;
  position:fixed;
  top:0;
  left:0;
  right:0;

  width:100%;
  box-sizing:border-box;
  z-index:1000;
}

.logo{
  width:40px;
  margin-right:10px;
}

.title{
  font-size:20px;
}

</style>
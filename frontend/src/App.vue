<script setup lang="ts">

import { onMounted } from 'vue'
//import { ref } from 'vue'

import AppHeader from './components/layout/AppHeader.vue'
import SideMenu from './components/layout/SideMenue.vue'
import BottomNav from './components/layout/BottomNav.vue'
//import OfflineBanner from './components/layout/OfflineBanner.vue'

//const menuOpen = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/')
    const text = await response.text()
    console.log('Backend says:', text)
  } catch (error) {
    console.error('Error connecting to backend:', error)
  }
})

// <OfflineBanner /> after header in template

</script>



<template>
  <div class="app-layout">
    
    <AppHeader /> 
    

    <div class="content-area">
      <SideMenu v-if="$route.path !== '/'" />


      <main class="page-content">
        <router-view />
      </main>

    </div>

    <BottomNav v-if="$route.path !== '/'" />

  </div>
</template>

<style>

html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.app-layout{
  display:flex;
  flex-direction:column;
  height:100vh;
  width: auto;
}

.content-area{
  display:flex;
  flex:1;
  overflow:hidden;

  margin-top:40px;

}

.page-content{
flex:1;
padding:24px;
/*max-width:1100px;*/
/* margin:auto; */
overflow:auto;
width:100%;
}

@media (min-width: 900px){

  .app-layout{
  max-width:1400px;
  margin:auto;
  width:100%;
  }

  .page-content{
    margin-left:200px;
    margin-bottom: 60px;
  }

}

</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const online = ref(navigator.onLine)

onMounted(()=>{

  window.addEventListener('online',()=>online.value=true)
  window.addEventListener('offline',()=>online.value=false)

})
</script>

<template>

<div v-if="!online" class="offline">
Offline mode
</div>

</template>

<style scoped>

.offline{
position:fixed;
top:60px;
left:0;
right:0;
background:#e74c3c;
color:white;
text-align:center;
padding:6px;
}

</style>
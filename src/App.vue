<script setup>
import {onMounted} from "vue";

onMounted(()=>{
  window.addEventListener('hashchange',(e)=>{
    console.log(e)
  })
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>

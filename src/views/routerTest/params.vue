<script setup>
import {useRoute} from "vue-router";
import {nextTick, onMounted, ref} from "vue";

const route = useRoute()

// 接收路由参数
let paramsRouter = ref({})

onMounted(()=>{
  nextTick(()=>{
    if (route.params){
      paramsRouter.value = route.params
    }
  })
  console.log("路由对象------》",route)
})
</script>

<template>
<div class="router-main">
  <div class="info">
    <div class="params" v-if="route.params.content">
      <p>params参数</p>
      <div>{{route.params.content}}</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.router-main{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
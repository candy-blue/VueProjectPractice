<script setup>
import {useRoute} from "vue-router";
import {nextTick, onMounted, ref} from "vue";

const route = useRoute()

// 接收路由参数
let queryRouter = ref({})

onMounted(() => {
  nextTick(() => {
    if (route.query) {
      queryRouter.value = route.query
    }
  })
  console.log("路由对象------》", route)
})
</script>

<template>
  <div class="router-main">
    <div class="info">
      <div v-if="route.query.content" class="query">
        <p>query参数</p>
        <div>{{ route.query.content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-main {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const routerContext = ref('')
const routerTest = (value) => {
  if (value === 'params') {
    console.log("params传参")
    router.push({
      name: 'routerTest',
      params: {
        content: routerContext.value
      }
    })
  } else if (value === 'query') {
    router.push({
      path: '/home/routerTest2',
      query: {
        content: routerContext.value
      }
    })
  }
}
</script>

<template>
  <div class="main">
    <a-card style="width: 24%;height: 24%" title="路由参数">
      <a-input v-model:value="routerContext"/>
      <a-button type="primary" @click="routerTest('params')">params传参</a-button>
      <a-button type="primary" @click="routerTest('query')">query传参</a-button>
    </a-card>
    <a-card style="width: 24%;height: 24%" title="结果">
      <router-view></router-view>
    </a-card>
  </div>
</template>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;

  .ant-card {
    box-shadow: 0 0 8px 8px rgba(17, 104, 198, 0.5);
  }
}
</style>
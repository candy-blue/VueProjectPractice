<script setup>
import {useRoute, useRouter} from "vue-router";

const router = useRouter()

const btnList = [
  {name: '路由测试', path: '/router/index'}
]
const btnEvent = (path) => {
  if (path === '/router/index') {
    router.push({
      path: '/router'
    })
  }
}
</script>

<template>
  <div class="home">
    <div class="header"></div>
    <div class="content">
      <div class="btn-box">
        <a-button v-for="(item,index) in btnList" :key='index' type="primary" @click="btnEvent(item.path)">
          {{ item.name }}
        </a-button>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: url("@/assets/bg.jpg");
  background-size: 100% 100%;

  .header{
    height: 120px;
    width: 100%;
  }

  .content{
    height: calc(100vh - 160px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer{
    height: 40px;
    width: 100%;
  }
}
</style>
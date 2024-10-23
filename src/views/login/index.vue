<script setup>
import {ref} from "vue";
import {message} from "ant-design-vue";

const formRef = ref()
const form = ref({
  username: '',
  password: ''
})

const submit = () => {
  message.info("提交----")
  formRef.value.validate()
    .then(() => {
      if (form.value.username === 'admin' && form.value.password === '123456') {
        message.success('登录成功')
      } else {
        message.warn('用户名或密码错误')
      }
    })
    .catch(() => {
      message.error('请输入用户名或密码')
    })
}
</script>

<template>
  <div class="main">
    <div class="login">
      <a-form
        ref="formRef"
        :label-col="{ span: 8 }"
        :model="form"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        name="basic"
      >
        <a-form-item
          :rules="[{ required: true, message: '请输入用户名!' }]"
          label="用户名"
          name="username"
        >
          <a-input v-model:value="form.username"/>
        </a-form-item>

        <a-form-item
          :rules="[{ required: true, message: '请输入密码!' }]"
          label="密码"
          name="password"
        >
          <a-input-password v-model:value="form.password"/>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }" name="remember">
          <a-checkbox v-model:checked="form.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button html-type="submit" type="primary" @click="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="css" scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login {
    width: 400px;
    height: 300px;
    border: 1px solid skyblue;
    border-radius: 10px;
    display: flex;
  }
}
</style>
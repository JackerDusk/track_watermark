<template>
  <el-config-provider :locale="locale">
  
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed, onMounted } from 'vue'
const store = useUserStore()
const locale = computed(() => (store.lang === 'zh-cn' || store.lang === 'zh' ? zhCn : en))
onMounted(()=>{
  document.body.style.setProperty('--el-color-primary', '#6d29c9');
  document.body.style.setProperty('--el-fill-color-light', 'rgba(73,41,201,0.05)');
  document.body.style.setProperty('--el-color-primary-light-9', 'rgba(73,41,201,0.05)');
  document.body.style.setProperty('--el-color-primary-light-7', 'rgba(73,41,201,0.05)');
  document.body.style.setProperty('--antd-wave-shadow-color', '#6d29c9');
})
</script>
<style lang="scss">
input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #fff inset !important;
}
</style>

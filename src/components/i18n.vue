<template>
  <div style="display:flex;align-items:center;margin-right:5px;">
    <el-icon
      class="change_language"
      @click="toggle"
    >
      <i class="iconfont icon-language" style="font-size: 20px;"></i>
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref,getCurrentInstance } from 'vue'
import { useUserStore } from "@/store/user";
const store=useUserStore()
const language = ref('en')
const current:any=getCurrentInstance()
const {ctx}=current
const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  let lang=store.lang==='zh'?'en':'zh';
  ctx.$i18n.locale=lang
  store.updateLang(lang)

}
</script>

<style>
/* .change_language{
  position: absolute;
  top: 25px;
  right: 10px;
z-index: 999;
} */
</style>
<template>
  <a-layout>
    <!-- header -->
    <app-header/><!-- header -->
    <a-layout>
      <!-- content -->
      <app-content/>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AppSider from './components/Sider.vue';
import AppHeader from './components/Header.vue';
import AppContent from './components/Content.vue'

export default defineComponent({
  name:'AppLayout',
  components: {
    AppSider,
    AppHeader,
    AppContent
  },
  setup() {
    return {
    };
  },
});
</script>
<style>
.site-layout .site-layout-background {
}
</style>

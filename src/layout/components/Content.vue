<template>
    <a-layout-content class="app-content">
            <router-view />
        
    </a-layout-content>
</template>
<script lang="ts" setup>
import {useRoute} from 'vue-router'
const Route=useRoute()
</script>
<style lang="scss" scoped>
.app-content {
    min-height: calc(100vh - 64px);
    background-color: #fff;
}
</style>
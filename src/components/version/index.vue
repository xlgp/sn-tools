<template>
    <div class="version">{{ version }}</div>
</template>
<script setup lang="ts">
import packageObj from '../../../package.json'
const version = ref(packageObj.version);
</script>
<style scoped>
.version {
    color: #414e67;
    font-size: 0.8em;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
}
</style>
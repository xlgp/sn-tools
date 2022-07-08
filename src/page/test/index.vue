<template>
  <input type="file" name="file" ref="fileRef" @change="change" />
</template>

<script lang="ts" setup>
let fileRef = ref(null);
let change = (e: Event) => {};
</script>

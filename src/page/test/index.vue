<template>
  <input type="file" name="file" ref="fileRef" @change="change" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

let fileRef = ref(null);
let change = (e:Event) => {
  
};
</script>

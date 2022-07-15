<template>
  <el-page-header content="面单打印" @back="router.back" />
  <img src="/img/dingneng.png" />
</template>

<script setup>
import { useStore } from "./stores/order";
const route = useRoute();
const router = useRouter();
const store = useStore();

console.log(store.$state);
const goBack = () => {
  router.back();
};
</script>

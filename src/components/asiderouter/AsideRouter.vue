<template>
  <router-link
    v-for="router in routerLinkList"
    :to="router.path"
    :key="router.path"
    class="link"
    >{{ router.meta.title }}</router-link
  >
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const routerLinkList = router.getRoutes().filter((item) => !item.meta.menuHidden);
</script>
<style scoped>
.link {
  padding: 10px;
  color: #ffffff;
  display: flex;
}
.router-link-exact-active {
  background-color: #0053a9;
}
</style>

<template>
  <el-config-provider :locale="locale" :z-index="zIndex">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default defineComponent({
  name: "App",
  setup() {
    return {
      zIndex: 3000,
      locale: zhCn,
    };
  },
});
</script>

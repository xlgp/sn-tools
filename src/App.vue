<template>
  <el-config-provider :locale="locale" :z-index="zIndex">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
      transitionName: "fade",
    };
  },
});
</script>

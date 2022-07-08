<template>
  <el-card class="box-card" v-show="showable">
    <template #header>
      <span>无品牌类型</span>
    </template>
    <el-tag v-for="(item, index) in noPinPaiList" :key="index">{{ item.pinpai }}</el-tag>
  </el-card>
</template>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>

<script lang="ts">
import { ComputedRef } from "vue";
export default defineComponent({
  name: "NoPinPaiList",
  setup() {
    const noPinPaiList = inject("noPinPaiList") as ComputedRef;
    const showable = computed(() => {
      return noPinPaiList.value.length > 0;
    });
    return { noPinPaiList, showable };
  },
});
</script>

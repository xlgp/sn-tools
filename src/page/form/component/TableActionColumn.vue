<template>
  <el-button
    type="primary"
    :icon="Edit"
    size="small"
    @click="editClick"
    circle
  ></el-button>
  <el-button
    type="danger"
    :icon="Delete"
    size="small"
    @click="deleteClick"
    circle
  ></el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Edit, Delete } from "@element-plus/icons-vue";

export default defineComponent({
  emits: ["delete", "edit"],
  setup(props, { emit }) {
    const deleteClick = () => emit("delete");
    const editClick = () => emit("edit");

    return {
      deleteClick,
      editClick,
      Delete,
      Edit,
    };
  },
});
</script>

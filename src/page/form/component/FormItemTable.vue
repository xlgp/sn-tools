<template>
  <el-table :data="tableData" stripe border>
    <template #empty>
      <el-empty :image-size="40">
        <el-button type="text" @click="addHandler">新增</el-button>
      </el-empty>
    </template>
    <template #append>
      <el-row justify="end">
        <el-button type="primary" style="margin: 4px;" plain @click="addHandler">新增</el-button>
      </el-row>
    </template>
    <el-table-column v-for="(value, key) in columnList" :prop="key" :label="value" :key="key" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="{ row, column, $index }">
        <table-action-column @delete="deleteHandler(row, $index)" @edit="editHandler(row, $index)" />
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisible" title="添加项" destroy-on-close>
    <form-item v-model="formItem"></form-item>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmHandler">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { FormItemType } from "../constants/formItem";
import FormItem from "./FormItem.vue";
import TableActionColumn from "./TableActionColumn.vue";

let data = {
  label: "姓名",
  key: "name",
  type: "文本",
  value: "张三",
};

export default defineComponent({
  components: { TableActionColumn, FormItem },
  props: {
    modelValue: Array
  },
  setup(props) {
    const columnList = {
      label: "名称",
      key: "KEY",
      type: "类型",
      value: "选项值",
    };
    const modelValue = props.modelValue as FormItemType[];
    const tableData = ref<FormItemType[]>(modelValue);
    const dialogFormVisible = ref<Boolean>(false);
    const formItem = ref<FormItemType>({} as FormItemType);
    const formItemIndex = ref(-1);

    const deleteHandler = (row: any, index: number) => {
      console.log(row);
      tableData.value.splice(index, 1);
    };
    const editHandler = (row: any, index: number) => {
      formItem.value = row;
      formItemIndex.value = index;
      dialogFormVisible.value = true;
    };
    const addHandler = () => {
      formItem.value = {} as FormItemType;
      dialogFormVisible.value = true;
    };

    const confirmHandler = () => {
      dialogFormVisible.value = false;
      if (formItemIndex.value == -1) {
        //新增
        tableData.value.push(formItem.value);
      } else {
        tableData.value[formItemIndex.value] = formItem.value;
      }
      formItemIndex.value = -1;
    };

    return {
      columnList,
      tableData,
      deleteHandler,
      editHandler,
      addHandler,
      formItem,
      dialogFormVisible,
      confirmHandler
    };
  },
});
</script>

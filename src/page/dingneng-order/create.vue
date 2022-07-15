<template>
  <div style="width: 600px; margin: auto">
    <h3 style="text-align: center; color: var(--el-text-color-primary)">创建面单</h3>
    <el-form ref="elFormRef" :model="formData" :rules="rules" label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="发货人" prop="sender">
            <el-input
              v-model="formData.sender"
              placeholder="请输入发货人"
              clearable
              :style="{ width: '100%' }"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发货人电话" prop="sender_phone">
            <el-input
              v-model="formData.sender_phone"
              placeholder="请输入发货人电话"
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="收货单位" prop="recipient_company">
        <el-input
          v-model="formData.recipient_company"
          placeholder="请输入收货单位"
          clearable
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="收货人" prop="recipient">
            <el-input
              v-model="formData.recipient"
              placeholder="请输入收货人"
              clearable
              :style="{ width: '100%' }"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收货人电话" prop="recipient_phone">
            <el-input
              v-model="formData.recipient_phone"
              placeholder="请输入收货人电话"
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="收货地址" prop="address">
        <el-input
          v-model="formData.address"
          placeholder="请输入收货地址"
          clearable
          :style="{ width: '100%' }"
        >
        </el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12" v-for="(item, index) in formData.goodsList" :key="item.key">
          <el-form-item :label="item.text">
            <el-input-number
              v-model="item.value"
              :placeholder="'请输入' + item.text"
              :step="1"
              :max="1000"
            >
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="发运时间" prop="send_time">
            <el-date-picker
              type="datetime"
              v-model="formData.send_time"
              placeholder="请输入发运时间"
              clearable
              value-format="x"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收货时间" prop="recipient_time">
            <el-date-picker
              type="datetime"
              v-model="formData.recipient_time"
              placeholder="请输入收货时间"
              clearable
              value-format="x"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="总体积" prop="total_volume">
            <el-input
              v-model.number="formData.total_volume"
              placeholder="请输入总体积"
              clearable
              :style="{ width: '100%' }"
            >
              <template #append>m³</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总重量" prop="total_weight">
            <el-input
              v-model.number="formData.total_weight"
              placeholder="请输入总重量"
              clearable
            >
              <template #append>KG</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="提货人" prop="delivery_user">
        <el-input
          v-model="formData.delivery_user"
          placeholder="请输入提货人"
          clearable
          :style="{ width: '100%' }"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="formData.remark"
          type="textarea"
          placeholder="请输入备注"
          :autosize="{ minRows: 4, maxRows: 4 }"
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">打印</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import rules from "./composable/useOrderRules";
import { useStore } from "./stores/order";

const elFormRef = ref();
const store = useStore();
store.init();
const formData = store.$state;

const router = useRouter();

const submitForm = async () => {
  if (!elFormRef) return;
  await elFormRef.value.validate((valid) => {
    if (!valid) return;
    console.log(formData);
    router.push({
      name: "dingnengOrderPrint",
    });
  });
};
const resetForm = () => {
  if (!elFormRef) return;
  store.init();
};
</script>
<style></style>

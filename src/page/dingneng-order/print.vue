<template>
  <div class="order-wapper print" :style="{ fontSize: fontSize + 'em' }">
    <div class="order-header">
      <img height="40" width="40" src="/img/dingneng.png" />
      <span>杭州鼎能供应链发运单</span>
    </div>
    <p style="margin: 10px 0 0 0">运单号：{{ data.dn_order_id }}</p>
    <div style="text-align: center">
      <barcode :code="data.dn_order_id" />
    </div>
    <table>
      <tbody>
        <tr>
          <td colspan="3">发货人：{{ data.sender }}</td>
          <td colspan="2">电话：{{ data.sender_phone }}</td>
        </tr>
        <tr>
          <td colspan="5">收货单位：{{ data.recipient_company }}</td>
        </tr>
        <tr>
          <td colspan="3">收货人：{{ data.recipient }}</td>
          <td colspan="2">电话：{{ data.recipient_phone }}</td>
        </tr>
        <tr>
          <td colspan="5">收货地址：{{ data.address }}</td>
        </tr>
        <tr>
          <td
            colspan="5"
            style="text-align: center; padding: 10px 0px; font-size: 1.12em"
          >
            货物详情
          </td>
        </tr>
        <tr>
          <td class="border-right" v-for="item in data.goodsList" :key="item.key">
            {{ item.text }}
          </td>
          <td style="text-align: center">合计</td>
        </tr>
        <tr>
          <td class="border-right" v-for="item in data.goodsList" :key="item.key">
            {{ item.value }}
          </td>
          <td style="text-align: center">{{ store.total_count }}</td>
        </tr>
        <tr>
          <td colspan="3">体积：{{ data.total_volume }} m³</td>
          <td colspan="2">重量：{{ data.total_weight }} KG</td>
        </tr>
        <tr>
          <td colspan="5">发运时间：{{ c_send_time }}</td>
        </tr>
        <tr>
          <td colspan="3">提货人：{{ data.delivery_user }}</td>
          <td colspan="2">签收人：</td>
        </tr>
        <tr>
          <td colspan="5">日期：{{ c_recipient_time }}</td>
        </tr>
        <tr style="border: none">
          <td colspan="5">备注：{{ data.remark }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="other-wapper">
    <div class="print-btn-wapper">
      <el-input-number
        v-model="fontSize"
        :precision="2"
        :step="0.1"
        :min="1"
        :max="2"
        @change="handleChange"
        style="width: 200px; margin-left: 74px"
      />
    </div>
    <div class="print-btn-wapper">
      <el-button type="primary" class="print-btn" @click="handlePrint">打印</el-button>
    </div>
    <div class="print-btn-wapper">
      <el-button @click="goBack" :loading="loading">返回</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./stores/order";
import { useSettingsStore } from "./stores/settings";
import barcode from "./components/barcode.vue";

const router = useRouter();

const store = useStore();
const settingsStore = useSettingsStore();

const data = store.$state;

const loading = ref(false);

const { fontSize } = storeToRefs(settingsStore);

const handleChange = (value: number | any) => {
  settingsStore.saveToStorage();
};

const c_send_time = computed(() => {
  let d = new Date(data.send_time);
  return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
});
const c_recipient_time = computed(() => {
  let d = new Date(data.recipient_time);
  return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
});

const goBack = () => {
  loading.value = true;
  router.back();
};

const handlePrint = () => {
  window.print();
};
</script>
<style scoped>
@media print {
  body {
    -webkit-print-color-adjust: exact;
    -moz-print-color-adjust: exact;
    -ms-print-color-adjust: exact;
    print-color-adjust: exact;
    color-adjust: exact;
  }
  .el-page-header,
  .print-btn-wapper {
    display: none;
  }

  .print {
    display: block !important;
  }
}

.el-page-header {
  margin: 10px 200px;
}
.order-wapper {
  width: 400px;
  margin: 0 auto;
  padding: 0 4px;
}
.order-header {
  text-align: center;
  padding: 10px 0 13px 0;
  border-bottom: 1px solid;
}
.order-header span {
  font-size: 1.17em;
  line-height: 40px;
  font-weight: bold;
  margin-left: -40px;
}
.order-header img {
  vertical-align: bottom;
  float: left;
}

table {
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
}
tr {
  border-bottom: 1px solid;
}
td {
  padding-top: 6px;
}
.border-right {
  border-right: 1px solid;
  text-align: center;
}
.print-btn-wapper {
  margin-bottom: 30px;
}
.print-btn {
  width: 400px;
  height: 40px;
}

.other-wapper {
  position: absolute;
  right: 30px;
  top: 100px;
}

.el-input-number::before {
  content: "\5b57\4f53\5927\5c0f";
  position: absolute;
  left: -74px;
  z-index: 1;
  color: #606266;
}
.el-input-number::after {
  content: "em";
  position: absolute;
  right: 40px;
  top: 0px;
  z-index: 1;
  color: #606266;
}
</style>

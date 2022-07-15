<template>
  <div style="width: 600px; margin: auto">
    <h2 style="text-align: center; color: var(--el-text-color-primary)">创建面单</h2>
    <el-form ref="elForm" :model="formData" :rules="rules" label-width="100px">
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
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              :style="{ width: '100%' }"
              placeholder="请输入发运时间"
              clearable
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收货时间" prop="recipient_time">
            <el-date-picker
              type="datetime"
              v-model="formData.recipient_time"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              :style="{ width: '100%' }"
              placeholder="请输入收货时间"
              clearable
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="总体积" prop="total_volume">
            <el-input
              v-model="formData.total_volume"
              placeholder="请输入总体积"
              clearable
              :style="{ width: '100%' }"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总重量" prop="total_weight">
            <el-input
              v-model="formData.total_weight"
              placeholder="请输入总重量"
              clearable
              :style="{ width: '100%' }"
            >
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
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { goodsList } from "./data";
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        sender: undefined,
        sender_phone: undefined,
        recipient_company: undefined,
        recipient: undefined,
        recipient_phone: undefined,
        address: undefined,
        goodsList: goodsList,
        send_time: "2022-07-12 16:31:43",
        recipient_time: "2022-07-12 16:32:37",
        total_volume: undefined,
        total_weight: undefined,
        delivery_user: "熊修军",
        remark: "",
      },
      rules: {
        sender: [
          {
            required: true,
            message: "请输入发货人",
            trigger: "blur",
          },
        ],
        sender_phone: [
          {
            required: true,
            message: "请输入发货人电话",
            trigger: "blur",
          },
        ],
        recipient_company: [
          {
            required: true,
            message: "请输入收货单位",
            trigger: "blur",
          },
        ],
        recipient: [
          {
            required: true,
            message: "请输入收货人",
            trigger: "blur",
          },
        ],
        recipient_phone: [
          {
            required: true,
            message: "请输入收货人电话",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入收货地址",
            trigger: "blur",
          },
        ],
        zhixiang: [],
        muxiang: [],
        tiejian: [],
        qita: [],
        send_time: [
          {
            required: true,
            message: "请输入发运时间",
            trigger: "change",
          },
        ],
        recipient_time: [
          {
            required: true,
            message: "请输入收货时间",
            trigger: "change",
          },
        ],
        total_volume: [
          {
            required: true,
            message: "请输入总体积",
            trigger: "blur",
          },
        ],
        total_weight: [
          {
            required: true,
            message: "请输入总重量",
            trigger: "blur",
          },
        ],
        delivery_user: [
          {
            required: true,
            message: "请输入提货人",
            trigger: "blur",
          },
        ],
        remark: [],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs["elForm"].resetFields();
    },
  },
};
</script>
<style></style>

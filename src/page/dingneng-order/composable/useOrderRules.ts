export default {
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
      type: "number",
      required: true,
      message: "请输入总体积，数字类型",
      trigger: "blur",
    },
  ],
  total_weight: [
    {
      type: "number",
      required: true,
      message: "请输入总重量，数字类型",
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
} as Partial<Record<string, any>>;

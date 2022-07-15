import { goodsList, GoodsItemType } from "../data";
export const useStore = defineStore('dingnengOrder', {
  state: () => {
    return {
      dn_order_id: "",
      sender: "",
      sender_phone: "",
      recipient_company: "",
      recipient: "",
      recipient_phone: "",
      address: "",
      goodsList: [] as unknown as GoodsItemType[],
      send_time: 0,
      recipient_time: 0,
      total_volume: 0,
      total_weight: 0,
      delivery_user: "",
      remark: "",
    }
  },
  actions: {
    createDNOrderId() {
      return "DN" + new Date().getTime() + "" + Math.floor(Math.random() * 1000);
    },
    getGoodsList() {
      return goodsList;
    },
    init() {
      this.$reset();
      this.goodsList = this.getGoodsList();
      this.dn_order_id = this.createDNOrderId();
      this.delivery_user = "熊修军";
      this.send_time = +new Date;
      this.recipient_time = +new Date;
    }
  },
})
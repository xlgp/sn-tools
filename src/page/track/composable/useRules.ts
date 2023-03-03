import { FormRules } from "element-plus";
import { track_status } from "../contants";

export default () => {
    const rules = reactive<FormRules>({
        dn_order_id: { required: true, trigger: 'blur' },
        status: {
            required: true, trigger: 'change', validator: (rule: any, value: any, callback: any) => {
                const status_list = Object.values(track_status);
                let b = status_list.find(item => item.code == value);
                callback(b && undefined || new Error("请选择合适的状态"));
            }
        },
        info: { required: true, trigger: 'blur' },
        update_time: { required: true, trigger: 'change' }
    });

    return rules;
}
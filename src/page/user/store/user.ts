import { UserFormType } from "../data";
import useUtils from "../composable/useUtils";

export const useUserStore = defineStore('userStore', () => {

  const form = reactive<UserFormType>({
    username: "",
    nickname: "",
    openid: useUtils.getUUid(),
    secretKey: "",
    password: "",
    passwordText: "",
    app_auth_code: useUtils.getUUid(),
  });

  const init = () => {
    form.app_auth_code = useUtils.getUUid();
    form.openid = useUtils.getUUid();
  }

  return { form, init };
});

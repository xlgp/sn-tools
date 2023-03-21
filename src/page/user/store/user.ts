import { UserFormKeyType, UserFormType } from "../data";
import useUtils from "../composable/useUtils";

const storageKey = "__user_s_key";

export const useUserStore = defineStore('userStore', () => {

  const initValue = () => {
    return {
      app_auth_code: useUtils.getUUid(),
      openid: useUtils.getUUid(),
      secretKey: sessionStorage.getItem(storageKey) || ""
    } as UserFormType
  }

  const form = reactive<UserFormType>({} as UserFormType);

  const init = () => {
    let value = initValue();
    let keys: UserFormKeyType[] = Object.keys(value) as UserFormKeyType[];
    keys.forEach(key => form[key] = value[key]);
  }

  watch(() => form.secretKey, (newValue: string) => {
    sessionStorage.setItem(storageKey, newValue);
  });

  return { form, init };
});

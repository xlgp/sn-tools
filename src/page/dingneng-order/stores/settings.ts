export const useSettingsStore = defineStore("dingnengSettings",()=>{
    //内部变量
    const key = "printFontSize";

    const getFromStorage =() =>{ 
        const value = localStorage.getItem(key);
        console.log("getFromStorage", value);
        if(value == null || value == undefined){
          return 1;
        }else{
          return parseFloat(value);
        }
      }
      const value = getFromStorage();
      const fontSize = ref(value);
      const saveToStorage =() =>{
        localStorage.setItem(key, ""+fontSize.value);
      }
    return{
        fontSize,
        getFromStorage,
        saveToStorage
    }
})

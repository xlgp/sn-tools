import { App } from 'vue';
import ClipboardJS from 'clipboard';



export default {
    install: (app: App, options: any) => {
        app.directive('clipboard', {
            // 当被绑定的元素挂载到 DOM 中时……
            mounted(el:HTMLElement,binding) {
              // 聚焦元素
              new ClipboardJS(el);
            }
          })
    }
}
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 创建大仓库
let pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
export default pinia;

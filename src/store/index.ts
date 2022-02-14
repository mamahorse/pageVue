import { createStore } from 'vuex'
import { getModules } from './modules'
// 使用状态管理组件
export default createStore({
  state: {                    //  全局调用
  },
  mutations: {                //  全局使用
  },
  actions: {                  //  全局使用
  },
  modules: getModules(),
})
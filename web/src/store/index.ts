import { createStore } from 'vuex'
import navModule from '@/base/frame/app/header/ts/store'
import workspaceModule from '@/business/workspace/store/store'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    nav: navModule,
    workspace: workspaceModule,
  }
})

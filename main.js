import Vue from 'vue'
import App from './App'
import ldcake from "ldcake-ui"
import mixinCommon from '@/mixins/common.js'
import mixinIndex from '@/mixins/index.js'

Vue.config.productionTip = false
Vue.use(ldcake)
Vue.mixin(mixinCommon)
Vue.mixin(mixinIndex)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

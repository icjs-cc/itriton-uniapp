import Vue from 'vue'
import App from './App'
import ldcake from "ldcake-ui"
import mixinIndex from '@/mixins/index.js'

Vue.config.productionTip = false
Vue.use(ldcake)
Vue.mixin(mixinIndex)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

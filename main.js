import Vue from 'vue'
import App from './App'
import ldcake from "ldcake-ui"

Vue.config.productionTip = false
Vue.use(ldcake)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

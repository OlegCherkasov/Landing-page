import Vue from 'vue'
import App from './App.vue'

//npm install vue-meta
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
//--

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

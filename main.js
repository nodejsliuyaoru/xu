import Vue from 'vue'
import App from './App.vue'

import Ceshi from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Ceshi)

Vue.filter("zongshu",function(e){
	if(e.length>9){
		return e.substring(0,10)+"...."
	}else{
		return e
	}
})
new Vue({
  render: h => h(App)
}).$mount('#app')

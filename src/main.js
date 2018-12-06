import Vue from 'vue'
import App from './App.vue'
import language from 'jj_language'

language.initData({
	from:'auto', 
	to:getQueryString('to') || 'jp',
	//list:{'例如我是中文咯':'data'},
	//directory:'/language/',
	automatic:true,
});
 
Vue.use(language);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

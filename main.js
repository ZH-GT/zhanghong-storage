import App from './App'
import * as request from '@/utils/config.js';
// app.config.globalProperties.$api
// app.config.globalProperties.$api = request 
// Vue.prototype.$api = request;
//#ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.$api
	return {
		app
	}
}
// #endif
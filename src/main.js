import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import { currency, date } from './methods/filters'

import $httpMessageState from './methods/PushMessageState'

const app = createApp(App)
AOS.init({ })
app.config.globalProperties.$filters = {
  currency,
  date
}
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系為中文
setLocale('zh_TW')
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingOverlay', Loading)// 使用（LoadingOverlay這個名稱,將Loading載進來）
/* eslint-disable */
app.component('Form', Form)
app.component('Field', Field)
/* eslint-disable */
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')

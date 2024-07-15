import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap' // for JavaScript
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import { currency, date } from './methods/filters'
import $httpMessageState from './methods/PushMessageState'

const app = createApp(App)
AOS.init({})
app.config.globalProperties.$filters = {
  currency,
  date
}
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW') // 預設為中文語系
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingOverlay', Loading)
app.component('FormForm', Form)
app.component('FieldField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')

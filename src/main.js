import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import $thousandths from '@/utils/thousandths.js' //* 千分位

// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 匯入 vee-validate 相關規則
import { required, email, min, max, size, mimes } from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入繁體中文語系檔案
import zhTW from './zh_TW.json'

// 要在 mount 之前

import App from './App.vue'
import router from './router'

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('size', size)
defineRule('mimes', mimes)
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

// 要在 createApp 之下

const app = createApp(App)

app.config.globalProperties.$thousandths = $thousandths //* 千分位

app.component('Form', Form)  // eslint-disable-line
app.component('Field', Field) // eslint-disable-line
app.component('ErrorMessage', ErrorMessage)
app.component('IsLoading', VueLoading)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

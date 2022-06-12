import { createApp,reactive } from 'vue'
import App from './App.vue'

const app = createApp(App)
/**
 * 引入配置和插件
 */
import config from './config'
import router from './router'
import store from './store'
import { isMobile } from './utils'
import AV from 'leancloud-storage'
import VueProgressBar from "@aacassandra/vue3-progressbar";
import { isEmpty } from 'lodash'

/**
 * 引入样式文件和 icon
 */
 import 'aos/dist/aos.css'
 import 'gitalk/dist/gitalk.css'
 import 'katex/dist/katex.css'
 import '@/assets/font/fontello.scss'
 import '@/styles/index.scss'

// 设置title
const { title, subtitle } = config
document.title = `${title} | ${subtitle}`

// 设置全局变量
app.config.globalProperties.$config = config
app.config.globalProperties.$isMobile = reactive({ value: isMobile() })
app.config.globalProperties.$lodash = { isEmpty }

//初始化 VueProgressBar
const options = {
    color: '#b28fce',
    thickness: '4px',
    transition: {
        speed: '0.2s',
        opacity: '0.5s',
        termination: 300,
    },
    location: 'top',
    autoRevert: true,
    inverse: false,
}
app.use(VueProgressBar, options)

// 初始化 // Init Leancloud
window.AV = AV
AV.init(config.leancloud)

// 初始化 Cover
new Image().src = config.defaultCover

app.use(store).use(router).mount('#app')

// (o=^•ェ•)o
const labelStyle = 'line-height:22px;color:#FFF;background:#D68FE9;'
const themeRepo = 'https://github.com/chanshiyucx/aurora'
console.info(`%c ${config.title} %c`, labelStyle, '', window.location.origin)
console.info('%c Theme %c', labelStyle, '', themeRepo)
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// 一般在建项目时就会帮你挂载好

// 为了达到效果，可以在public资源目录下放置你喜欢的图片，就能拿到想要的效果了。
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import {
    // create naive ui
    create,
    NMessageProvider,
    NIcon,
    NConfigProvider,
    NDialogProvider
} from 'naive-ui'

const naive = create({
    components: [
        NMessageProvider,
        NIcon,
        NConfigProvider,
        NDialogProvider
    ]
})

const app = createApp(App)

app.use(router).use(naive).mount('#app')

import './assets/main.css'
import "bootstrap"
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { GesturePlugin } from "@vueuse/gesture";
// import { useFullscreen } from '@vueuse/core'
import Autocomplete from "@/components/utils/SelectComponent.vue"
import Dialog from "@/components/utils/Dialog.vue"

library.add(fas);
library.add(fab);
library.add(far);

const app = createApp(App)

app.use(GesturePlugin)
app.use(createPinia())
app.use(router)
app.component("fa-i", FontAwesomeIcon)
app.component("autocomplete", Autocomplete)
app.component("my-dialog", Dialog)

app.mount('#app')

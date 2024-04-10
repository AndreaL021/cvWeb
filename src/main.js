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
import { MotionPlugin } from "@vueuse/motion";
import { GesturePlugin } from "@vueuse/gesture";
import Autocomplete from "@/components/utils/SelectComponent.vue"
import Dialog from "@/components/utils/Dialog.vue"

library.add(fas);
library.add(fab);
library.add(far);

const app = createApp(App)

app.use(MotionPlugin)
app.use(GesturePlugin)
app.use(createPinia())
app.use(router)
app.component("fa-i", FontAwesomeIcon)
app.component("autocomplete", Autocomplete)
app.component("my-dialog", Dialog)

app.mount('#app')

// PER CREARE NUOVE ANIMAZIONI
// app.use(MotionPlugin, {
//     directives: {
//       'pop-bottom-test': {
//         initial: {
//           scale: 0,
//           opacity: 0,
//           y: 100,
//         },
//         visible: {
//           scale: 1,
//           opacity: 1,
//           y: 0,
//           transition: {
//             duration: 1000,
//             type: 'keyframes',
//             ease: 'ease-in-out',
//           },
//         },
//       },
//     },
//   })
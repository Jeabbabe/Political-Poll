import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";

//import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
})




const firebaseConfig = {
  apiKey: "AIzaSyDiSNgAUwJxuvYCBMobCe5sglLkmjnhRBA",
  authDomain: "final-political-poll.firebaseapp.com",
  projectId: "final-political-poll",
  storageBucket: "final-political-poll.appspot.com",
  messagingSenderId: "568047443114",
  appId: "1:568047443114:web:b27ecbe8a8012f1b9d44d3",
  measurementId: "G-M6NN9V0T77"
};

const firebase = initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

export default createVuetify({
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })
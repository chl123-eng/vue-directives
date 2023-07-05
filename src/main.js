import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import directives from "./directives";

Vue.use(directives);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

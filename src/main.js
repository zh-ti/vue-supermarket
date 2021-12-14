import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import router from "@/router/index.js";
import store from "vuex";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import "./styles/main.scss";

Vue.component("m-btn", () => import("./components/MBtn"));
Vue.component("m-card", () => import("./components/MCard"));

Vue.component("m-sidebar", () => import("./components/MSidebar"));
Vue.component("m-alert", () => import("./components/MAlert"));
Vue.component("m-dialog", () => import("./components/MDialog"));

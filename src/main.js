import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import icons from "./assets/icons"

import PrimaryButton from "../src/components/UI/buttons/PrimaryButton"
import SecondaryButton from "../src/components/UI/buttons/SecondaryButton"
import TheSidebar from "../src/components/nav/TheSidebar.vue"
import TheBackground from "../src/components/UI/layouts/TheBackground"

const app = createApp(App);

library.add(icons);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("primary-button", PrimaryButton);
app.component("secondary-button", SecondaryButton);
app.component("TheSidebar", TheSidebar);
app.component("TheBackground", TheBackground);

app.use(store).use(router).mount("#app");

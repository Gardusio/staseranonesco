import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBeer, faHamburger, faPizzaSlice, faPlusCircle, faTrash, faMinusCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faBacon, faRing } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import PrimaryButton from "../src/components/UI/buttons/PrimaryButton"
import SecondaryButton from "../src/components/UI/buttons/SecondaryButton"
import TheSidebar from "../src/components/nav/TheSidebar.vue"
import TheBackground from "../src/components/UI/layouts/TheBackground"
const app = createApp(App);

library.add(faPlus);
library.add(faPlusCircle);
library.add(faMinusCircle);
library.add(faTrash);
library.add(faTimesCircle);
library.add(faHome);
library.add(faCar);
library.add(faChair);
library.add(faPenFancy);
library.add(faCopy);
library.add(faBacon);
library.add(faRing);
library.add(faHandHoldingUsd);
library.add(faUtensils);
library.add(faArrowCircleLeft);
library.add(faHamburger);
library.add(faBeer);
library.add(faPizzaSlice);
library.add(faExclamationCircle);
library.add(faLayerGroup);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("primary-button", PrimaryButton);
app.component("secondary-button", SecondaryButton);
app.component("TheSidebar", TheSidebar);
app.component("TheBackground", TheBackground);

app.use(store).use(router).mount("#app");

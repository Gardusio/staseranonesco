import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBeer, faHamburger, faPizzaSlice, faPlusCircle, faTrash, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faBacon } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
library.add(faPlus);
library.add(faPlusCircle);
library.add(faMinusCircle);
library.add(faTrash);
library.add(faTimesCircle);
library.add(faHome);
library.add(faCar);
library.add(faCopy);
library.add(faBacon);
library.add(faHandHoldingUsd);
library.add(faUtensils);
library.add(faArrowCircleLeft);
library.add(faHamburger);
library.add(faBeer);
library.add(faPizzaSlice);


app.use(store).use(router).mount("#app");

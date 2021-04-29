<template>
  <div
    :class="
      openStyle
        ? 'notification-container-open ' + alertType
        : 'notification-container ' + alertType
    "
  >
    <div class="notification-header">
      <font-awesome-icon :icon="iconType" size="lg"></font-awesome-icon>
      <p class="notification-text-closed" :style="scaled">{{ text }}</p>
      <font-awesome-icon
        @click="openStyle = true"
        v-if="!openStyle"
        :icon="['fas', 'eye']"
        class="eye-icon"
      ></font-awesome-icon>
      <font-awesome-icon
        v-else
        :icon="['fas', 'eye-slash']"
        class="eye-icon"
        @click.self="openStyle = false"
      ></font-awesome-icon>
    </div>

    <ul class="line-items" v-if="openStyle">
      <li v-for="lineItem in lineItems" :key="lineItem.productId" class="line-item">
        <span class="qty">{{lineItem.qty}}x </span>
        <span class="product">{{lineItem.productName}}</span>
      </li>
    </ul>

    <button class="view-order" v-if="openStyle" @click="$emit('view')">Vai all'ordine</button>

    <div class="notification-open-footer" v-if="openStyle">
      <p class="delete-notification-text">Elimina notifica</p>
      <p class="notification-createdAt-date">21.40</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "alert", "text", "lineItems"],
  data() {
    return {
      openStyle: this.open,
    };
  },
  methods: {
    hasToScale(name) {
      const numWords = (str) => {
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        return str.split(" ").length;
      };
      if (numWords(name) > 4 && name.length > 33) return true;
      return false;
    },
  },
  computed: {
    alertType() {
      let alertStyle;
      if (this.alert === "alert") {
        if(this.openStyle)
          alertStyle = "alert-style";
          else alertStyle = "alert-style alert-style-closed"
        }
      else if (this.alert === "first-alert") alertStyle = "first-alert-style";
      return alertStyle;
    },
    scaled() {
      return this.hasToScale(this.text)
        ? " width:70%; font-size: 14px; overflow-wrap: break-word; "
        : "";
    },
    iconType() {
      return this.type === "ta"
        ? ["fas", "layer-group"]
        : this.type === "del"
        ? ["fas", "car"]
        : ["fas", "chair"];
    },
  },
};
</script>

<style scoped>
.notification-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 28px;
  width: 90%;
  height: 48px;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 0.2rem;
}

.notification-text-closed {
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.notification-container-open {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 90%;
  height: 220px;
  border: 2px solid black;
  border-radius: 16px;
  background-color: white;
  transition: linear 2 ease-in;
}

.notification-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
}

.line-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 75%;
  height: 45%;
  list-style: none;
  overflow-y: scroll;
}

.line-item {
  display: flex;
  justify-content: space-around;
  color: var(--mainbrown);
}

.qty {
  font-weight: bold;
  font-family: "Lato", sans-serif;
  display: inline-block;
  color: black;
}

.product {
  display: inline-block;
  font-weight: 200;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  margin-left: 0.5rem;
  text-align: justify;
  text-justify: inter-word;
}

.notification-open-footer {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
}

.delete-notification-text {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: black;
}

.notification-createdAt-date {
  font-weight: 400;
  font-size: 12px;
  color: var(--mainbrown);
}

.view-order {
  margin-top: 1rem;
  border-radius: 20px;
  border: 1px solid var(--mainbrown);
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 2.95px 2.95px 2.6px;
  width: 140px;
  height: 24px;
}

.alert-style {
  border-color: var(--second-alert-red);
  color: var(--second-alert-red);
}

.alert-style-closed {
  animation-duration: 1.75s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
  animation-name: pulsate-fwd;
  animation-timing-function: ease;
}

@keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.075);
    transform: scale(1.075);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.first-alert-style {
  border-color: var(--notification-first-alert);
  color: var(--notification-first-alert);
}

.eye-icon {
  color: var(--mainbrown);
}
</style>

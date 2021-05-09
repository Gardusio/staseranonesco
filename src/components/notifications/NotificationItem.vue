<template>
  <div
    :class="
      openStyle
        ? `notification-container-open ${alertType}`
        : `notification-container ${alertType}`
    "
  >
    <notification-item-header
      :type="type"
      :isOpen="openStyle"
      :notificationText="text"
      @open="openStyle = true"
      @close="openStyle = false"
    />
    
    <notification-line-items v-if="openStyle" :lineItems="lineItems" />

    <button class="view-order-button" v-if="openStyle" @click="$emit('view')">
      Vai all'ordine
    </button>

    <notification-item-footer
      v-if="openStyle"
      :createdAt="createdAt"
      @delete="$emit('delete')"
    />
  </div>
</template>

<script>
import NotificationItemHeader from "./NotificationItemHeader.vue";
import NotificationLineItems from "./NotificationLineItems.vue";
import NotificationItemFooter from "./NotificationItemFooter.vue";
export default {
  components: {
    NotificationItemHeader,
    NotificationLineItems,
    NotificationItemFooter,
  },
  props: ["type", "alert", "text", "lineItems", "createdAt"],
  data() {
    return {
      openStyle: false,
    };
  },
  computed: {
    alertType() {
      const alertStyle = "alert-style ";
      if (this.alert === "alert" && this.openStyle) return alertStyle;
      else return `${alertStyle} alert-style-closed`;
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

.view-order-button {
  margin-top: 1rem;
  border-radius: 20px;
  border: 1px solid var(--secondarybrown);
  color: var(--mainbrown);
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 2.95px 2.95px 2.6px;
  width: 140px;
  height: 24px;
}

.alert-style {
  border-color: var(--alert-red);
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
</style>

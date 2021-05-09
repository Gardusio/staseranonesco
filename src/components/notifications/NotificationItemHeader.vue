<template>
  <div class="notification-header">
    <font-awesome-icon
      :icon="iconType"
      size="lg"
      class="icon"
    ></font-awesome-icon>
    <p class="notification-text-closed" :class="isScaled">
      {{ notificationText }}
    </p>
    <font-awesome-icon
      @click="$emit('open')"
      v-if="!isOpen"
      :icon="['fas', 'eye']"
      class="eye-icon"
    ></font-awesome-icon>
    <font-awesome-icon
      v-else
      :icon="['fas', 'eye-slash']"
      class="eye-icon"
      @click.self="$emit('close')"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  props: ["type", "isOpen", "notificationText"],
  computed: {
    iconType() {
      return this.type === "ta"
        ? ["fas", "layer-group"]
        : this.type === "del"
        ? ["fas", "car"]
        : ["fas", "chair"];
    },
    isScaled() {
      return this.hasToScale(this.notificationText) ? "scaled-text" : "";
    },
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
};
</script>

<style scoped>
.notification-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
}

.notification-text-closed {
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.notification-text-closed,
.icon,
.eye-icon {
  color: var(--mainbrown);
}

.scaled-text {
  width: 70%;
  font-size: 14px;
  overflow-wrap: break-word;
}
</style>

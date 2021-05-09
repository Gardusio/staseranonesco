<template>
  <div class="card-header-container" :class="headerBackground">
    <span class="card-header-title" :style="titleScaled">{{ title }}</span>
    <div class="card-hour-container">
      <div class="header-hour" :class="hourClass" :style="hourStyle">
        {{ `${hour.hours}.${hour.minutes}` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "hour", "orderType", "alertType"],
  computed: {
    headerBackground() {
      if (this.orderType === "ta") return "header-background-ta";
      else if (this.orderType === "del") return "header-background-del";
      return "header-background-table";
    },
    titleScaled() {
      if (this.hasToScale(this.title)) return "font-size: 16px ";
      return "";
    },
    hourClass() {
      if (this.orderType === "ta") return "hour-ta";
      else if (this.orderType === "del") return "hour-del";
      return "hour-table";
    },
    hourStyle() {
      if (this.alertType === "completed") return "color: var(--buttongreen)";
      if (this.alertType === "alert") return "color: var(--alert-red)";
      return "";
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
      if (numWords(name) > 4) return true;
      return false;
    },
  },
};
</script>

<style scoped>
.card-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28%;
  color: white;
}

.card-header-title {
  font-weight: 500;
  font-size: 1.25rem;
  margin-left: 1rem;
  flex: 2;
}

.card-hour-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
  background-color: white;
}

.header-background-ta {
  background-color: var(--takeawaysgreen);
}
.hour-ta {
  color: var(--takeawaysgreen);
}
.header-background-del {
  background-color: var(--deliveryorange);
}
.hour-del {
  color: var(--deliveryorange);
}
.header-background-table {
  background-color: var(--secondarybrown);
}
.hour-table {
  color: var(--secondarybrown);
}

.header-hour {
  font-family: "Lato", "sans-serif";
  font-weight: bold;
  font-size: 1.25rem;
  background-color: white;
}
</style>

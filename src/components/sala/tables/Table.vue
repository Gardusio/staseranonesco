<template>
  <div class="table-container" :class="status === 'alert' ? 'animated-alert' : ''">
    <div class="table-icon-container">
      <p class="table-number" :style="numberStyle">{{ number }}</p>
      <img class="table-img" src="../../../assets/table.png" />
    </div>
    <table-icon :status="status"></table-icon>
  </div>
</template>

<script>
import TableIcon from "./TableIcon";

export default {
  components: { TableIcon },
  props: ["status", "number"],
  computed: {
    numberStyle() {
      if (this.status === "completed") return "color: var(--completed-green)";
      if (this.status === "waiting") return "color: var(--friedorange)";
      if (this.status === "alert") return "color: var(--alert-red)";
      return ""
    },
  },
};
</script>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
}

.table-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 5rem;
}

.table-img {
  z-index: 10;
  width: 7rem;
  height: 5rem;
}

.table-number {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: var(--gray);
  font-size: 60px;
  margin-right: 8px;
  text-shadow: 2px 3px 3px rgba(119, 122, 123, 0.1);
}
</style>

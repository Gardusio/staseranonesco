<template>
  <div class="container" :class="status === 'alert' ? 'animated-alert' : ''">
    <div class="table-icon-container">
      <p :class="numberClass">{{ number }}</p>
      <img class="table" src="../../../assets/table.png" />
    </div>
    <table-icon :status="status"></table-icon>
  </div>
</template>

<script>
import TableIcon from "./TableIcon";

export default {
  components: { TableIcon },

  props: ["status", "number"],
  data() {
    return {
      numberStyle: "number",
    };
  },
  computed: {
    numberClass() {
      if (this.isCompleted()) return this.numberStyle + " completed";
      if (this.isWaiting()) return this.numberStyle + " waiting";
      if (this.isAlert()) return this.numberStyle + " alert";
      if (this.isFirstAlert()) return this.numberStyle + " first-alert";
      return this.numberStyle;
    },
  },

  methods: {
    isCompleted() {
      return this.status === "completed";
    },
    isWaiting() {
      return this.status === "waiting";
    },
    isAlert() {
      return this.status === "alert";
    },
    isFirstAlert() {
      return this.status === "first-alert";
    },
  },
};
</script>

<style scoped>
.container {
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

.table {
  z-index: 10;
  width: 7rem;
  height: 5rem;
}

.number {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: var(--gray);
  font-size: 60px;
  margin-right: 8px;
  text-shadow: 2px 3px 3px rgba(119, 122, 123, 0.1);
}
.completed {
  color: var(--completed-green);
}
.first-alert {
  color: var(--notification-first-alert);
}
.waiting {
  color: var(--friedorange);
}
.alert {
  color: var(--second-alert-red);
}
</style>

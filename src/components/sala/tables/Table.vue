<template>
  <div class="table-container">
    <div class="table-icon-container">
      <p class="table-number" :style="numberStyle">{{ table.number }}</p>
      <img class="table-img" src="../../../assets/table.png" />
    </div>
    <table-icon :status="tableStatus"></table-icon>
  </div>
</template>

<script>
import TableIcon from "./TableIcon";

export default {
  components: { TableIcon },
  props: ["table"],
  data() {
    return {
      tableAlertMillis: {},
    };
  },
  created() {
    this.tableAlertMillis = this.$store.getters["getTableAlertMillis"];
  },
  computed: {
    tableStatus() {
      const alertFlag = "alert";
      const currentStatus = this.table.status;
      
      if (currentStatus === "completed" || currentStatus == "free") return currentStatus;
      if (currentStatus === alertFlag) return alertFlag;
      else if (this.isToAlert(this.table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: this.table.id,
          status: alertFlag,
        });
        if (this.table.orderId != null) {
          this.$store.dispatch("orders/setOrderStatus", {
            id: this.table.orderId,
            status: alertFlag,
          });
        }
        return alertFlag;
      }
      return this.table.status;
    },
    numberStyle() {
      if (this.table.status === "completed") return "color: var(--completed-green)";
      if (this.table.status === "waiting") return "color: var(--friedorange)";
      if (this.table.status === "alert") return "color: var(--alert-red)";
      return "";
    },
  },
  methods: {
    isToAlert(orderCreatedAt) {
      const currentTime = Date.now();
      const alertMillis = this.tableAlertMillis;
      const creationMillis = new Date(orderCreatedAt).getTime();
      const alertTime = creationMillis + alertMillis;
      return alertTime < currentTime;
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

<template>
  <div class="grid-container">
    <table-item
      v-for="table in tableList"
      :key="table.id"
      :tableId="table.id"
      :number="table.number"
      :status="tableStatus(table)"
      :orderCreatedAt="table.orderCreatedAt"
      @click="toTable(table)"
    ></table-item>
  </div>
</template>

<script>
import TableItem from "./Table.vue";

export default {
  components: { TableItem },
  props: ["tableList"],
  data() {
    return {
      tableAlertMillis: {},
    };
  },
  created() {
    this.tableAlertMillis = this.$store.getters["getTableAlertMillis"];
  },
  methods: {
    toTable(table) {
      if (table.status === "free")
        this.$router.push(`/empty-table/${table.id}`);
      else this.$router.push(`/table-order/${table.id}`);
    },

    tableStatus(table) {
      if (table.status === "completed") return "completed";

      if (table.status === "alert") return "alert";
      else if (this.isToAlert(table.statusChanges, table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: table.id,
          status: "alert",
        });
        this.$store.dispatch("orders/setOrderStatus", {
          id: table.orderId,
          status: "alert",
        });
        return "alert";
      }

      if (table.status === "first-alert") return "first-alert";
      else if (this.isToFirstAlert(table.statusChanges, table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: table.id,
          status: "first-alert",
        });
        this.$store.dispatch("orders/setOrderStatus", {
          id: table.orderId,
          status: "first-alert",
        });
        return "first-alert";
      }
      return table.status;
    },

    isToFirstAlert(statusChanges, orderCreatedAt) {
      const currentTime = Date.now();
      const firstAlertMillis = this.tableAlertMillis.first;
      const creationMillis = new Date(orderCreatedAt).getTime();
      const firstAlertTime = creationMillis + firstAlertMillis;
      return firstAlertTime < currentTime;
    },
    isToAlert(statusChanges, orderCreatedAt) {
      const currentTime = Date.now();
      const secondAlertMillis = this.tableAlertMillis.second;
      const creationMillis = new Date(orderCreatedAt).getTime();
      const secondAlertTime = creationMillis + secondAlertMillis;
      return secondAlertTime < currentTime;
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3%;
  margin-left: 13%;
  margin-right: 41%;
  width: 50%;
  row-gap: 2.5rem;
  column-gap: 6rem;
  grid-auto-flow: dense;
}
</style>

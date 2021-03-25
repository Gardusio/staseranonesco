<template>
  <div class="grid-container">
    <Table
      v-for="table in tableList"
      :key="table.id"
      :tableId="table.id"
      :number="table.number"
      :status="tableStatus(table)"
      :orderCreatedAt="table.orderCreatedAt"
      @click="toTable(table)"
    ></Table>
  </div>
</template>

<script>
import Table from "./Table.vue";

export default {
  components: { Table },
  props: ["tableList"],

  methods: {
    toTable(table) {
      if (table.status === "free") this.$router.push(`/empty-table/${table.id}`);
      else this.$router.push(`/table-order/${table.id}`);
    },

    tableStatus(table) {
      if (table.status === "alert") return "alert";
      else if (this.isToAlert(table.statusChanges, table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: table.id,
          newStatus: "alert",
        });
        return "alert";
      }

      if (table.status === "first-alert") return "first-alert";
      else if (this.isToFirstAlert(table.statusChanges, table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: table.id,
          newStatus: "first-alert",
        });

        return "first-alert";
      }
      return table.status;
    },

    isToFirstAlert(statusChanges, orderCreatedAt) {
      const currentTime = Date.now();
      const firstAlertMillis = statusChanges.firstAlert * 60 * 1000;
      const creationMillis = new Date(orderCreatedAt).getTime();
      const firstAlertTime = creationMillis + firstAlertMillis;
      return firstAlertTime < currentTime;
    },
    isToAlert(statusChanges, orderCreatedAt) {
      const currentTime = Date.now();
      const secondAlertMillis = statusChanges.secondAlert * 60 * 1000;
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
  column-gap: 2rem;
  grid-auto-flow: dense;
}
</style>

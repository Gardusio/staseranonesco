<template>
  <div class="grid-container">
    <table-item
      v-for="table in tables"
      :key="table.id"
      :tableId="table.id"
      :number="table.number"
      :status="calculateTableStatus(table)"
      :orderCreatedAt="table.orderCreatedAt"
      @click="toTable(table)"
    ></table-item>
  </div>
</template>

<script>
import TableItem from "./Table.vue";

export default {
  components: { TableItem },
  data() {
    return {
      tables: [],
      tableAlertMillis: {},
    };
  },
  created() {
    //load Tables
    //this.$store.dispatch("tables/setTables");
    this.tables = this.$store.getters["tables/getTables"];
    this.tableAlertMillis = this.$store.getters["getTableAlertMillis"];
  },
  methods: {
    toTable(table) {
      if (table.status === "free")
        this.$router.push(`/empty-table/${table.id}`);
      else this.$router.push(`/table-order/${table.id}`);
    },

    calculateTableStatus(table) {
      const alertFlag = "alert";
      if (table.status === "completed") return "completed";
      if (table.status === alertFlag) return alertFlag;
      else if (this.isToAlert(table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: table.id,
          status: alertFlag,
        });
        if (table.orderId != null) {
          this.$store.dispatch("orders/setOrderStatus", {
            id: table.orderId,
            status: alertFlag,
          });
        }
        return alertFlag;
      }
      return table.status;
    },

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

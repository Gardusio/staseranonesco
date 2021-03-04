<template>
  <div class="grid-container">
    <Table
      v-for="table in tables"
      :key="table.tableId"
      :status="table.status"
      :number="table.number"
      @click="toTable(table)"
    ></Table>
  </div>
</template>


<script>
import Table from "./Table.vue";
/* free/reserved/completed/waiting */
export default {
  components: { Table},
  data() {
    return {
      tables: [
        {
          tableId: 1,
          number: 1,
          status: "free",
          seats: 0,
          reservation: "",
          order: {
            id: 1,
            lastUpdate: "2020-11-23T21:50:23",
            lineItems: [
              {
                liId: 1,
                qty: 1,
                product: {
                  productId: 1,
                  productCategory: "fritti",
                  productName: "Cipotle",
                },
              },
            ],
          },
        },
        {
          tableId: 2,
          number: 2,
          status: "completed",
          seats: 0,
          reservation: "",
          order: {
            id: 1,
            lastUpdate: "2020-11-23T21:50:23",
            lineItems: [
              {
                liId: 1,
                qty: 1,
                product: {
                  productId: 1,
                  productCategory: "fritti",
                  productName: "Cipotle",
                },
              },
            ],
          },
        },
      ],
    };
  },
  methods: {
    toTable(table) {
      if (table.status === "free") 
        this.$router.push("new-order", table);
      else 
        this.$router.push("order", table);
    },
  },
};
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2%;
  margin-left: 12%;
  margin-right: 40%;
  width: 52%;
  row-gap: 5rem;
  column-gap: 2rem;
  grid-auto-flow: dense;
}
</style>
<template>
  <header class="add-tables-header">Aggiungi Tavolo</header>

  <section class="add-tables-section">
    <p class="add-tables-instructions">Inserisci il numero del nuovo tavolo.</p>
    <input class="add-tables-input" type="number" v-model="table.number" />

    <single-table-icon />

    <p class="add-tables-error" v-if="error">
      Il tavolo numero {{ table.number }} esiste gia!
    </p>
  </section>

  <section class="add-tables-section">
    <p class="add-tables-instructions">Inserisci i posti a tavola.</p>
    <input class="add-tables-input" type="number" v-model="table.seats" />

    <chairs-icon />
  </section>

  <primary-button class="primary-button" text="Aggiungi" @click="addTable()" />
</template>

<script>
import SingleTableIcon from "./SingleTableIcon";
import ChairsIcon from "./ChairsIcon";
export default {
  emits: ["close"],
  components: {
    SingleTableIcon,
    ChairsIcon,
  },
  data() {
    return {
      error: false,
      table: {
        id: null,
        orderId: null,
        hasOrder: false,
        number: this.tablesLength() + 1,
        seats: 4,
        status: "free",
        orderCreatedAt: "",
        lastUpdateAt: "",
        createdAt: new Date(),
      },
    };
  },
  methods: {
    tablesLength() {
      return this.$store.getters["tables/getTables"].length;
    },
    addTable() {
      this.$store.dispatch("tables/addTable", this.table);
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.add-tables-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.add-tables-header {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--secondarybrown);
}
.add-tables-instructions {
  color: var(--primarybrown);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
}
.add-tables-input {
  margin-bottom: 1rem;
  border-radius: 20px;
  height: 52px;
  width: 58px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--primarybrown);
  background-color: var(--paperwhite);
  border: none;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.15) 0px 8px 12px -8px;
  text-align: center;
}
.primary-button {
  margin-top: 2rem;
  letter-spacing: 0.5px;
}
.add-tables-error {
  color: firebrick;
  text-transform: uppercase;
}
</style>

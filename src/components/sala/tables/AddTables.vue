<template>
  <div class="container">
    <header class="add-tables-header">Aggiungi Tavolo</header>
    <section class="container section">
      <p class="instructions">Inserisci il numero del nuovo tavolo.</p>
      <input class="input" type="number" v-model="table.number" />
      <single-table-icon></single-table-icon>
      <p class="error" v-if="error">
        Il tavolo numero {{ table.number }} esiste gia!
      </p>
    </section>
    <section class="container section">
      <p class="instructions">Inserisci i posti a tavola.</p>
      <input class="input" type="number" v-model="table.seats" />
      <chairs-icon></chairs-icon>
    </section>
    <primary-button
      class="primary-button"
      text="Aggiungi"
      @click="addTable()"
    ></primary-button>
  </div>
</template>

<script>
import PrimaryButton from "../../UI/buttons/PrimaryButton";
import SingleTableIcon from "./SingleTableIcon";
import ChairsIcon from "./ChairsIcon";
export default {
  props: ["buttonText"],
  components: {
    PrimaryButton,
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
        reservation: {},
        statusChanges: {
          firstAlert: 15,
          secondAlert: 30,
        },
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.add-tables-header {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--secondarybrown);
}
.instructions {
  color: var(--primarybrown);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
}
.input {
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
.error {
  color: firebrick;
  text-transform: uppercase;
}
</style>

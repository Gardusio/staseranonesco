<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>
  <section class="main-section">
    <p class="title">Tavolo {{ table.number }}</p>
    <div class="seats">
      <p class="instructions">Quante persone?</p>
      <div class="seats-actions">
        <font-awesome-icon
          class="action-icon"
          :icon="['fas', 'minus-circle']"
          size="lg"
          @click="updateSeats(-1)"
        ></font-awesome-icon>
        <input class="input" type="number" :value="seats" />
        <font-awesome-icon
          class="action-icon"
          :icon="['fas', 'plus-circle']"
          size="lg"
          @click="updateSeats(1)"
        ></font-awesome-icon>
      </div>
      <chairs-icon></chairs-icon>
    </div>
    <small-modal v-if="showSeats" @close="showSeats = false"> </small-modal>
    <primary-button
      @click="createOrder()"
      class="main-action"
      text="Apri ordine"
      >Apri ordine</primary-button
    >
  </section>
  <date-widget class="date"></date-widget>
</template>

<script>
import DateWidget from "../components/UI/date/DateWidget";
import ChairsIcon from "../components/sala/tables/ChairsIcon.vue";
import SmallModal from "../components/UI/layouts/SmallModal.vue";

export default {
  props: ["id", "number"],
  components: {
    ChairsIcon,
    DateWidget,
    SmallModal,
  },
  data() {
    return {
      table: null,
      seats: 1,
      reserved: false,
      showReservation: false,
      showSeats: false,
    };
  },
  created() {
    const tables = this.$store.getters["tables/getTables"];
    const id = this.$route.params.id;
    const t = tables.find((t) => t.id === parseInt(id));
    this.table = t;
  },
  methods: {
    updateSeats(num) {
      this.seats += num;
    },
    confirmSeats() {
      this.$store.dispatch("tables/updateSeats", {
        id: this.table.id,
        seats: this.seats,
      });
      this.showSeats = false;
    },
    createOrder() {
      const routeParams = this.$route.params;
      const tableId = routeParams.id;
      this.confirmSeats();
      this.$router.push("/create/" + tableId);
    },
  },
  computed: {},
};
</script>

<style scoped>
.main-section {
  display: flex;
  position: absolute;
  height: 100vh;
  width: calc(100% - 100px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
}
.date {
  position: fixed;
  bottom: 3%;
  right: 3%;
  height: auto;
}
.title {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  color: var(--mainbrown);
  font-size: 4rem;
  margin-bottom: 2rem;
}
.action-icon {
  color: var(--mainbrown);
  align-self: center;
}

.seats {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40%;
  align-items: center;
}
.seats-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}
input {
  border-radius: 50%;
  height: 70px;
  width: 70px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: #2d150b;
  background-color: #faecda;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 10px 20px -5px,
    rgba(0, 0, 0, 0.1) 0px 8px 10px -8px;
  margin-right: 1.2rem;
  text-align: center;
  margin-left: 1.2rem;
}

.instructions {
  color: var(--secondarybrown);
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: center;
}

.main-action {
  margin-top: 2rem;
}
</style>

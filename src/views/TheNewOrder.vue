<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>
  <section class="main-section">
    <p class="title">Tavolo {{ number }} 3</p>
    <primary-button text="Apri ordine"></primary-button>
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
    </div>
    <chairs-icon style="margin-bottom: 1rem"></chairs-icon>
  </section>
  <!--
    <secondary-button
      :text="reservation"
      @click="showReservation = true"
    ></secondary-button>
    <small-modal v-if="showReservation" @close="showReservation = false">
     <reservation-action></reservation-action>
    </small-modal>
  -->

  <div class="date">
    <p class="day">Martedi 20 febbraio</p>
    <p class="hour">21.40</p>
  </div>
</template>

<script>
import PrimaryButton from "../components/buttons/PrimaryButton.vue";
import TheBackground from "../components/layouts/TheBackground";
import TheSidebar from "../components/nav/TheSidebar.vue";
import ChairsIcon from "../components/sala/tables/ChairsIcon.vue";
// import ReservationAction from "../components/sala/tables/ReservationAction.vue";
// import SecondaryButton from "../components/buttons/SecondaryButton.vue";
// import SmallModal from "../components/layouts/SmallModal.vue";

export default {
  components: {
    TheBackground,
    TheSidebar,
    PrimaryButton,
    ChairsIcon,
    // SecondaryButton
    // ReservationAction,
    // SmallModal,
  },
  data() {
    return {
      seats: 1,
      // reserved: false,
      // showReservation: false,
    };
  },
  methods: {
     updateSeats(num) {
       this.seats = this.seats + num;
     },
  },
  computed: {
    // reservation() {
    //   if (this.reserved) return "Libera";
    //   return "Riserva";
    // },
  },
};
</script>

<style scoped>
.main-section {
  margin-top: 5rem;
  display: flex;
  height: 80%;
  width: auto;
  flex-direction: column;
  align-items: center;
}
.title {
  font-family: "Montserrat", sans-serif;
  color: var(--secondarybrown);
  font-size: 4rem;
  margin-bottom: 3rem;
}
.action-icon {
  color: var(--mainbrown);
  align-self: center;
}
.seats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.seats-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
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
.date {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 3rem 1rem;
  height: 20vh;
  width: auto;
}
.day {
  color: var(--secondarybrown);
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
}
.instructions {
  color: var(--secondarybrown);
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: center;
}

.hour {
  color: var(--secondarybrown);
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
}
</style>
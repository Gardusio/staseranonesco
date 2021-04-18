<template>
  <the-background></the-background>
  <the-sidebar activeElem="ta"></the-sidebar>
  <notifications-section></notifications-section>

  <div class="main-container with-actions">
    <fasce-header
      :upper="slotUpper"
      :lower="slotLower"
      page="Asporto"
      @increase="(slot) => up(slot)"
      @decrease="(slot) => down(slot)"
    ></fasce-header>
    <orders-grid :orders="filteredOrders" type="ta"></orders-grid>
  </div>
  <div class="actions">
    <add-button @click="showNew = true"></add-button>
  </div>
  <big-modal v-if="showNew" @close="showNew = false">
    <new-take-away-form></new-take-away-form>
  </big-modal>
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection";
import FasceHeader from "../components/UI/layouts/FasceHeader";
import OrdersGrid from "../components/UI/layouts/OrdersGrid";
import AddButton from "../components/UI/buttons/AddButton";
import BigModal from "../components/UI/layouts/BigModal";
import NewTakeAwayForm from "../components/new-orders-forms/TakeAwayForm";
export default {
  components: {
    NotificationsSection,
    FasceHeader,
    OrdersGrid,
    AddButton,
    BigModal,
    NewTakeAwayForm,
  },

  data() {
    return {
      takeaways: [],
      slotLower: null,
      slotUpper: null,
      showNew: false,
    };
  },
  computed: {
    filteredOrders() {
      const isBeetween = (t) =>
        t.hour >= this.slotLower && t.hour <= this.slotUpper;
      return this.takeaways.filter(isBeetween);
    },
  },
  created() {
    this.takeaways = this.$store.getters["takeaways/getTakeAways"];
    const slots = this.$store.getters["getTakeAwaySlot"];
    this.slotLower = slots[0];
    this.slotUpper = slots[1];
  },
  methods: {
    up(slot) {
      let selectedMins;
      let selectedHours;
      let selectedSlot = slot === "lower" ? this.slotLower : this.slotUpper;

      selectedMins = new Date(selectedSlot).getMinutes();
      selectedHours = new Date(selectedSlot).getHours();

      if (selectedMins >= 45) {
        const newHour = selectedHours + 1;
        selectedSlot = new Date().setHours(newHour, 0, 0, 0);
      } else
        selectedSlot = new Date().setHours(
          selectedHours,
          selectedMins + 15,
          0,
          0
        );

      slot === "lower"
        ? (this.slotLower = selectedSlot)
        : (this.slotUpper = selectedSlot);

      this.$store.dispatch("updateSlots", {
        page: "takeAway",
        slots: [this.slotLower, this.slotUpper],
      });
    },
    down(slot) {
      let selectedMins;
      let selectedHours;
      let selectedSlot = slot === "lower" ? this.slotLower : this.slotUpper;

      selectedMins = new Date(selectedSlot).getMinutes();
      selectedHours = new Date(selectedSlot).getHours();

      if (selectedMins === 0) {
        const newHour = selectedHours - 1;
        selectedSlot = new Date().setHours(newHour, 45, 0, 0);
      } else
        selectedSlot = new Date().setHours(
          selectedHours,
          selectedMins - 15,
          0,
          0
        );

      slot === "lower"
        ? (this.slotLower = selectedSlot)
        : (this.slotUpper = selectedSlot);

      this.$store.dispatch("updateSlots", {
        page: "takeAway",
        slots: [this.slotLower, this.slotUpper],
      });
    },
  },
};
</script>

<style scoped>
.with-actions {
  height: 79%;
}
.actions {
  height: 17%;
  margin-left: 90px;
  margin-right: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

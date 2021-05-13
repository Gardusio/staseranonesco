<template>
  <the-sidebar activeElem="ta"></the-sidebar>
  <notifications-section />

  <div class="main-container main-container-with-actions">
    <fasce-header
      :upper="slotUpper"
      :lower="slotLower"
      page="Asporto"
      @increase="(slot) => updateSlot(slot, 'up')"
      @decrease="(slot) => updateSlot(slot, 'down')"
      @resetInterval="resetInterval()"
    />
    <orders-grid :orders="filteredOrders" type="ta" />
  </div>

  <div class="add-action-container">
    <add-button @click="showNew = true" icon="ta" />
  </div>

  <new-take-away-form v-if="showNew" @close="showNew = false" />
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection";
import FasceHeader from "../components/UI/layouts/fasce/FasceHeader";
import OrdersGrid from "../components/all/OrdersGrid";
import AddButton from "../components/UI/buttons/AddButton";
import NewTakeAwayForm from "../components/new-orders-forms/TakeAwayForm";
export default {
  components: {
    NotificationsSection,
    FasceHeader,
    OrdersGrid,
    AddButton,
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
  created() {
    this.takeaways = this.$store.getters["takeaways/getTakeAways"];
    const slots = this.$store.getters["getTakeAwaySlot"];
    this.slotLower = slots[0];
    this.slotUpper = slots[1];
  },
  computed: {
    filteredOrders() {
      const isBeetween = (t) =>
        t.hour >= this.slotLower && t.hour <= this.slotUpper;
      return this.takeaways.filter(isBeetween);
    },
  },
  methods: {
    resetInterval() {
      const defaultLower = new Date().setHours(18, 30, 0, 0);
      const defaultUpper = new Date().setHours(22, 30, 0, 0);
      this.slotLower = defaultLower;
      this.slotUpper = defaultUpper;
      this.$store.dispatch("updateSlots", {
        page: "takeAway",
        slots: [this.slotLower, this.slotUpper],
      });
    },
    updateSlot(slot, upOrDown) {
      let selectedMins;
      let selectedHours;
      let selectedSlot = slot === "lower" ? this.slotLower : this.slotUpper;

      selectedMins = new Date(selectedSlot).getMinutes();
      selectedHours = new Date(selectedSlot).getHours();

      if (upOrDown === "up") {
        if (selectedMins >= 45) {
          const newHour = selectedHours + 1;
          selectedSlot = new Date().setHours(newHour, 0, 0, 0);
        } else;
        selectedSlot = new Date().setHours(
          selectedHours,
          selectedMins + 15,
          0,
          0
        );
      } else {
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
      }

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
.main-container-with-actions {
  height: 79%;
}
.add-action-container {
  height: 17%;
  margin-left: 90px;
  margin-right: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

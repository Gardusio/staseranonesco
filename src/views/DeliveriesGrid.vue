<template>
  <the-background></the-background>
  <the-sidebar activeElem="delivery"></the-sidebar>
  <notifications-section></notifications-section>

  <div class="main-container with-actions">
    <fasce-header
      :lower="slotLower"
      :upper="slotUpper"
      page="Consegne"
      @increase="(slot) => up(slot)"
      @decrease="(slot) => down(slot)"
    ></fasce-header>
    <orders-grid :orders="filteredOrders" type="del"></orders-grid>
  </div>
  <div class="actions">
    <add-button @click="showNew = true"></add-button>
  </div>
  <big-modal v-if="showNew" @close="showNew = false">
    <new-delivery-form></new-delivery-form>
  </big-modal>
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection";
import FasceHeader from "../components/UI/layouts/FasceHeader";
import OrdersGrid from "../components/UI/layouts/OrdersGrid";
import AddButton from "../components/UI/buttons/AddButton";
import NewDeliveryForm from "../components/new-orders-forms/DeliveryForm";
import BigModal from "../components/UI/layouts/BigModal";
export default {
  components: {
    NotificationsSection,
    FasceHeader,
    OrdersGrid,
    AddButton,
    NewDeliveryForm,
    BigModal
  },
  data() {
    return {
      deliveries: [],
      slotLower: null,
      slotUpper: null,
      showNew: false,
    };
  },
  computed: {
    filteredOrders() {
      const isBeetween = (t) =>
        t.hour >= this.slotLower && t.hour <= this.slotUpper;
      return this.deliveries.filter(isBeetween);
    },
  },
  created() {
    this.deliveries = this.$store.getters["deliveries/getDeliveries"];
    const slots = this.$store.getters["getDeliverySlots"];
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
        page: "delivery",
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
        page: "delivery",
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
  height: 16%;
  width: 58%;
  margin-left: 7%;
  margin-right: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

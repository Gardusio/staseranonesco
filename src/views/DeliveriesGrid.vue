<template>
  <the-sidebar activeElem="delivery" />
  <notifications-section/>

  <div class="main-container with-actions">
    <fasce-header
      :lower="slotLower"
      :upper="slotUpper"
      page="Consegne"
      @increase="(slot) => updateSlot(slot, 'up')"
      @decrease="(slot) => updateSlot(slot, 'down')"
    />
    <orders-grid :orders="filteredOrders" type="del" />
  </div>
  <div class="actions">
    <add-button @click="showNew = true" icon="del" />
  </div>

  <new-delivery-form v-if="showNew" @close="showNew = false" />
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection";
import FasceHeader from "../components/UI/layouts/fasce/FasceHeader";
import OrdersGrid from "../components/all/OrdersGrid";
import AddButton from "../components/UI/buttons/AddButton";
import NewDeliveryForm from "../components/new-orders-forms/DeliveryForm";
export default {
  components: {
    NotificationsSection,
    FasceHeader,
    OrdersGrid,
    AddButton,
    NewDeliveryForm,
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
        } else
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
  height: 17%;
  margin-left: 90px;
  margin-right: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

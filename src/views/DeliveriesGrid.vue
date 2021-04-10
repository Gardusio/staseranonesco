<template>
  <the-background></the-background>
  <the-sidebar activeElem="ta"></the-sidebar>
  <notifications-section></notifications-section>

  <div class="main-container with-actions">
    <take-aways-header
      :slotLower="slotLower"
      :slotUpper="slotUpper"
    ></take-aways-header>
    <take-aways-grid ></take-aways-grid>
  </div>
  <div class="actions">
    <add-button></add-button>
  </div>
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection";
import TakeAwaysHeader from "../components/takeaway/TakeAwayHeader";
import TakeAwaysGrid from "../components/takeaway/TakeAwaysGrid";
import AddButton from "../components/UI/buttons/AddButton";
export default {
  components: {
    NotificationsSection,
    TakeAwaysHeader,
    TakeAwaysGrid,
    AddButton,
  },
    data() {
    return {
      deliveries: [],
      slotLower: new Date().setHours(18, 30, 0, 0),
      slotUpper: new Date().setHours(22, 30, 0, 0),
    };
  },

  created() {
    this.deliveries = this.$store.getters["deliveries/getDeliveries"];
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

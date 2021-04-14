<template>
  <the-background></the-background>
  <the-sidebar activeElem="ta"></the-sidebar>
  <notifications-section></notifications-section>

  <div class="main-container with-actions">
    <take-aways-header></take-aways-header>
    <take-aways-grid :takeaways="takeaways"></take-aways-grid>
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
      takeaways: [],
    };
  },

  created() {
    this.takeaways = this.$store.getters["takeaways/getTakeAways"];
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

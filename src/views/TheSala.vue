<template>
  <the-background></the-background>
  <notifications-section></notifications-section>
  <the-sidebar activeElem="sala"></the-sidebar>
  <header-actions></header-actions>
  <tables-grid :tableList="tables"></tables-grid>
</template>

<script>
import TheBackground from "../components/layouts/TheBackground";
import TheSidebar from "../components/nav/TheSidebar.vue";
import NotificationsSection from "../components/sala/notifications/NotificationsSection.vue";
import TablesGrid from "../components/sala/tables/TablesGrid.vue";
import HeaderActions from "../components/sala/HeaderActions";

export default {
  components: {
    TheBackground,
    TheSidebar,
    NotificationsSection,
    TablesGrid,
    HeaderActions,
  },

  computed: {
    tables() {
      return this.$store.getters["tables/getTables"];
    },
  },
  created() {
    //load Tables
    this.$store.dispatch("tables/setTables");
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

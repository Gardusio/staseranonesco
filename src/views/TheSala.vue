<template>
  <the-background></the-background>
  <notifications-section></notifications-section>
  <the-sidebar activeElem="sala"></the-sidebar>
  <header-actions></header-actions>
  <tables-grid :tableList="tables"></tables-grid>
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection.vue";
import TablesGrid from "../components/sala/tables/TablesGrid.vue";
import HeaderActions from "../components/sala/HeaderActions";

export default {
  components: {
    NotificationsSection,
    TablesGrid,
    HeaderActions,
  },
  data() {
    return {
      tables: [],
    };
  },
  created() {
    //load Tables
    //this.$store.dispatch("tables/setTables");
    this.tables = this.$store.getters["tables/getTables"];
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

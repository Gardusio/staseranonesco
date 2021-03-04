<template>
    <the-background></the-background>
    <notifications-section></notifications-section>
    <the-sidebar activeElem="sala"></the-sidebar>
    <header-actions></header-actions>
    <tables-grid></tables-grid>
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
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
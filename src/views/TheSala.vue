<template>
  <notifications-section />
  <the-sidebar activeElem="sala" />
  <header-actions />
  <tables-grid />
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection.vue";
import TablesGrid from "../components/sala/tables/TablesGrid.vue";
import HeaderActions from "../components/sala//header-actions/HeaderActions";

export default {
  components: {
    NotificationsSection,
    TablesGrid,
    HeaderActions,
  },
};
</script>

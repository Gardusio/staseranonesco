<template>
  <the-background></the-background>
  <the-sidebar activeElem="delivery"></the-sidebar>
</template>

<script>
import TheBackground from "../components/layouts/TheBackground";
import TheSidebar from "../components/nav/TheSidebar.vue";
export default {
  components: {
    TheBackground,
    TheSidebar,
  },
};
</script>

.
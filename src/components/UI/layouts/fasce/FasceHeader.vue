<template>
  <div class="fasce-header-container">
    <span class="fasce-header-title">{{ page }}</span>
    <fasce-widget
      :page="page"
      :slotUpper="supper"
      :slotLower="slower"
      @slotUp="(slot) => $emit('increase', slot)"
      @slotDown="(slot) => $emit('decrease', slot)"
    />
    <span class="fasce-reset-button" @click="$emit('resetInterval')">Mostra tutti</span>
  </div>
</template>

<script>
import FasceWidget from "./FasceWidget";
export default {
  props: ["upper", "lower", "page"],
  computed: {
    supper() {
      return this.upper;
    },
    slower() {
      return this.lower;
    },
  },
  components: { FasceWidget },
};
</script>

<style scoped>
.fasce-header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.fasce-header-title {
  font-family: "Raleway", "sans-serif";
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--mainbrown);
}

.fasce-reset-button {
  margin-top:1rem;
  color: var(--secondarybrown);
  font-weight: 600;
  text-decoration: underline;
}
</style>

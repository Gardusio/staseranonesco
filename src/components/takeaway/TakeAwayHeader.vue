<template>
  <div class="container">
    <span class="title">Asporto</span>
    <fasce-widget
      page="takeAways"
      :slotUpper="supper"
      :slotLower="slower"
      @slotUp="(slot) => $emit('increase', slot)"
      @slotDown="(slot) => $emit('decrease', slot)"
    ></fasce-widget>
  </div>
</template>

<script>
import FasceWidget from "../UI/layouts/FasceWidget";
export default {
  props: ["upper", "lower"],
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
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.title {
  font-family: "Raleway", "sans-serif";
  font-weight: 500;
  font-size: 2rem;
  color: var(--mainbrown);
}
</style>

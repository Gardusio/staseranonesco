<template>
  <div class="fasce-actions">
    <fasce-buttons @up="up('lower')" @down="down('lower')" />
    <span class="fasce-hours">{{ hourInterval }} </span>
    <fasce-buttons @up="up('upper')" @down="down('upper')" />
  </div>
</template>

<script>
import FasceButtons from "./FasceButtonsAction.vue";
export default {
  components: { FasceButtons },
  props: ["slotUpper", "slotLower"],
  methods: {
    up(slot) {
      this.$emit("slotUp", slot);
    },
    down(slot) {
      this.$emit("slotDown", slot);
    },
  },
  computed: {
    hourInterval() {
      const dateLower = new Date(this.slotLower);
      const hoursLower = dateLower.getHours();
      const minutesLower = dateLower.getMinutes();

      const dateUpper = new Date(this.slotUpper);
      const hoursUpper = dateUpper.getHours();
      const minutesUpper = dateUpper.getMinutes();

      let lowerInterval;
      let upperInterval;

      if (minutesLower != 0) lowerInterval = `${hoursLower}.${minutesLower}`;
      else lowerInterval = `${hoursLower}.00`;

      if (minutesUpper != 0) upperInterval = `${hoursUpper}.${minutesUpper}`;
      else upperInterval = `${hoursUpper}.00`;

      return `${lowerInterval}  -  ${upperInterval}`;
    },
  },
};
</script>

<style scoped>
.fasce-actions {
  margin-top: 0.5rem;
  display: flex;
  width: 33%;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
}
.fasce-hours {
  font-family: "Lato", "sans-serif";
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--secondarybrown);
}
</style>

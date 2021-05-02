<template>
  <section class="chips">
    <div
      v-for="chip in chips"
      :key="chip"
      class="chip"
      :class="chipSelected === chip ? `active` : ''"
      @click="handleSelected(chip)"
    >
      {{ chip }}
    </div>
  </section>
</template>

<script>
export default {
  props: ["chips"],
  data() {
    return {
      chipSelected: "",
    };
  },
  methods: {
    handleSelected(chip) {
      this.chipSelected = chip;
      this.$emit("selected", chip);
    },
  },
};
</script>

<style scoped>
.chips {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;
}

.chip {
  padding: 0.5rem;
  border-bottom: 2px solid var(--mainbrown);
  font-size: 1rem;
  font-weight: 500;
  color: var(--mainbrown);
  font-family: "Raleway", "sans-serif";
  transition: all 0.2s ease-in-out;
}

.active {
  padding: 0.5rem;
  font-size: 1.5rem;
  color: var(--mainbrown);
  font-weight: bold;
  font-family: "Raleway", "sans-serif";
  border-bottom: 4px solid var(--evidenceorange);
  transition: all 0.2s ease-in-out;
}

</style>

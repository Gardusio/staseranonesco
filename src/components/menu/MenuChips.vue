<template>
  <section class="chips">
    <div
      v-for="chip in chips"
      :key="chip"
      class="chip"
      :class="chipSelected === chip ? 'active' : ''"
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
  border: 1px solid var(--mainbrown);
  border-radius: 4px;
  font-size: 1rem;
  color: var(--mainbrown);
  font-family: "Raleway", "sans-serif";
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: all 0.2s ease-in-out;
}

.active {
  padding: 0.5rem;
  border: none;
  background-color: var(--pizzered);
  font-size: 1.5rem;
  color: white;
  font-family: "Raleway", "sans-serif";
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: all 0.2s ease-in-out;
}
</style>

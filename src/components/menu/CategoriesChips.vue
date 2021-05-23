<template>
  <section class="chips">
    <div
      v-for="chip in chips"
      :key="chip"
      class="chip"
      :class="chipSelected === chip ? `active` : ''"
      @click="handleSelected(chip)"
    >
      <div class="category-quantity" :style="type(chip)">
        {{ qty(chip) }}
      </div>
      <span class="category-name">{{ chip }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ["chips", "quantityState"],
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
    qty(chip) {
      let qty = 0;
      if (chip === "Tutti") {
        for (let i = 0; i < this.quantityState.length; i++) {
          const current = this.quantityState[i];
          qty += current.qty;
        }
      } else {
        for (let i = 0; i < this.quantityState.length; i++) {
          const current = this.quantityState[i];
          if (current.category === chip.toLowerCase()) qty = current.qty;
        }
      }
      return qty;
    },
    type(chip) {
      if (chip === "Fritti") return "color: var(--friedorange)"
      if (chip === "Pizze") return "color: var(--pizzered)"
      if (chip === "Panini") return "color: var(--secondarybrown)";
      return ""
    }
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
  font-size: 1rem;
  font-weight: 500;
  color: var(--mainbrown);
  font-family: "Raleway", "sans-serif";
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  border: 1px solid var(--mainbrown);
  border-radius: 4px
}

.active {
  font-size: 1.25rem;
  color: var(--mainbrown);
  font-weight: bold;
  font-family: "Raleway", "sans-serif";
  border-bottom: 4px solid var(--evidenceorange);
  transition: all 0.2s ease-in-out;
}

.category-quantity {
  color: var(--mainbrown);
  font-family: "Lato", "sans-serif";
  font-weight: bold;
  font-size: 24px;
}

.category-name {
   font-family: "Raleway", "sans-serif";
   margin: 4px
}
</style>

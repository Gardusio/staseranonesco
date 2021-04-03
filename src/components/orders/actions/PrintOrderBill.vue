<template>
  <div class="container">
    <span class="title">Conto {{ header }}</span>
    <span class="total">{{ total }}€</span>
    <span class="instructions">Vuoi aggiungere uno sconto?</span>
    <div class="discounts-grid">
      <div
        class="discount-item"
        :class="selectedDiscount === 1 ? 'active' : ''"
        @click="selectDiscount(1)"
      >
        1€
      </div>
      <div
        class="discount-item"
        :class="selectedDiscount === 1.5 ? 'active' : ''"
        @click="selectDiscount(1.5)"
      >
        1.5€
      </div>
      <div
        class="discount-item"
        :class="selectedDiscount === 2 ? 'active' : ''"
        @click="selectDiscount(2)"
      >
        2€
      </div>
      <div
        class="discount-item"
        :class="selectedDiscount === 2.5 ? 'active' : ''"
        @click="selectDiscount(2.5)"
      >
        2.5€
      </div>
      <div
        class="discount-item"
        :class="selectedDiscount === 3 ? 'active' : ''"
        @click="selectDiscount(3)"
      >
        3€
      </div>
      <div
        class="discount-item"
        :class="selectedDiscount === 3.5 ? 'active' : ''"
        @click="selectDiscount(3.5)"
      >
        3.5€
      </div>
    </div>

    <input
      class="input"
      type="text"
      placeholder="Cambia il prezzo finale"
      :value="confirmedTotal"
    />

    <primary-button text="Stampa"></primary-button>
  </div>
</template>

<script>
export default {
  props: ["total", "header"],
  data() {
    return {
      confirmedTotal: this.total,
      selectedDiscount: null,
    };
  },
  methods: {
    selectDiscount(disc) {
      this.selectedDiscount = disc;
      console.log(disc);
      this.confirmedTotal = this.total - disc;
    },
    activeDiscount(toCheck) {
      console.log(toCheck);
      toCheck == this.selectedDiscount ? "active" : "";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
}

.title {
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  font-size: 2.8rem;
  color: var(--mainbrown);
  letter-spacing: 1px;
  margin-top: -1rem;
}
.total {
  color: var(--buttongreen);
  font-family: "Lato", "sans-serif";
  font-size: 4rem;
}
.instructions {
  font-family: "Montserrat", "sans-serif";
  font-size: 1.5rem;
  color: var(--mainbrown);
}

.discounts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2;
  column-gap: 2rem;
  row-gap: 2rem;
  padding: 1rem;
}

.discount-item {
  border-radius: 15px;
  background-color: var(--gray);
  color: white;
  font-family: "Lato", "sans-serif";
  font-weight: bold;
  font-size: 2rem;
  width: 70px;
  height: 70px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  background-color: var(--buttongreen);
}
.input {
  border: 1px solid var(--gray);
  color: var(--mainbrown);
  font-family: "Montserrat", "sans-serif";
  font-size: 1.25rem;
  width: 70%;
  padding: 1rem;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
</style>
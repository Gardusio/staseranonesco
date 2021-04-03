<template>
  <div class="container">
    <span class="title">Stampa {{ header }}</span>
    <span class="instructions">Scegli il numero di copie</span>

    <div class="actions">
      <div class="action action-minus" @click="updateCopies(-1)">
        <font-awesome-icon
          class="icon"
          :icon="['fas', 'minus-circle']"
          size="6x"
        ></font-awesome-icon>
      </div>

      <input class="input" type="number" :value="orderCopies" />

      <div class="action action-plus" @click="updateCopies(1)">
        <font-awesome-icon
          class="icon"
          :icon="['fas', 'plus-circle']"
          size="6x"
        ></font-awesome-icon>
      </div>
    </div>

    <primary-button text="Stampa"></primary-button>
  </div>
</template>

<script>
export default {
  props: ["header"],
  data() {
    return {
      orderCopies: 1,
    };
  },
  methods: {
    updateCopies(num) {
      this.orderCopies += num;
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

.instructions {
  font-family: "Montserrat", "sans-serif";
  font-size: 1.5rem;
  color: var(--mainbrown);
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  width: 70%;
}

.action {
  height: 75px;
  width: 75px;
  border: 1.2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}

.action-minus {
  background-color: var(--buttonorange);
}

.action-plus {
  background-color: var(--buttongreen);
}

.input {
  border: none;
  background-color: transparent;
  font-family: "Lato", "sans-serif";
  font-size: 3.5rem;
  width: 10%;
  height: auto;
  text-align: center;
}

.icon {
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  max-width: 24px;
  max-height: 24px;
}
</style>
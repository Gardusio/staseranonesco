<template>
  <div class="container">
    <span class="title">Stampa {{ header }}</span>
    <div class="content-container">
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

      <primary-button class="print" text="Stampa"></primary-button>
    </div>
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
  align-items: center;
  justify-content: space-evenly;
}
.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-around;
}
.title {
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  font-size: 2rem;
  color: var(--mainbrown);
  letter-spacing: 1px;
  margin-top: 2rem;
  text-align: center;
}

.instructions {
  font-family: "Montserrat", "sans-serif";
  font-size: 1.25rem;
  color: var(--mainbrown);
  text-align: center;
  line-height: 1.5;
}

.actions {
  display: flex;
  align-items: center;
  height: auto;
  width: 90%;
  justify-content: center;
}

.action {
  height: 70px;
  width: 70px;
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
  font-size: 3rem;
  width: 20%;
  height: auto;
  text-align: center;
}

.icon {
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  max-width: 24px;
  max-height: 24px;
}

.print {
  margin-top: 0.5rem;
}
</style>

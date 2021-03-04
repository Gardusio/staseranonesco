<template>
  <div class="container">
    <header class="add-tables-header">Aggiungi Tavolo</header>
    <section class="container section">
      <p class="instructions">Inserisci il numero del nuovo tavolo.</p>
      <input class="input" type="number"/>
      <single-table-icon></single-table-icon>
    </section>
    <section class="container section">
      <p class="instructions">Inserisci i posti a tavola.</p>
      <input class="input" type="number" />
      <chairs-icon></chairs-icon>
    </section>
    <primary-button class="primary-button" text="Aggiungi"></primary-button>
  </div>
</template>

<script>
import PrimaryButton from "../../buttons/PrimaryButton";
import SingleTableIcon from "./SingleTableIcon"
import ChairsIcon from "./ChairsIcon"
export default {
  props: ["buttonText"],
  components: {
    PrimaryButton,
    SingleTableIcon,
    ChairsIcon
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
    margin-top:1rem;
    margin-bottom:1rem;
}

.add-tables-header {
    font-family: "Montserrat", sans-serif;
    font-size:1.6rem;
    font-weight: 600;
    color: var(--secondarybrown)
}
.instructions {
    color: var(--primarybrown);
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;
}
.input {
    margin-bottom:1rem;
    border-radius: 20px;
    height: 52px;
    width: 58px;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--primarybrown);
    background-color: var(--paperwhite);
    border: none;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 13px 27px -5px, rgba(0, 0, 0, 0.15) 0px 8px 12px -8px;
    text-align: center;
}
.primary-button {
    margin-top: 2rem;
    letter-spacing: 0.5px;
}
</style>
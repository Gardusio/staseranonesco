<template>
  <div class="container">
    <header class="delete-tables-header">Elimina Tavoli</header>
    <section class="container section">
      <font-awesome-icon
        :icon="['fas', 'exclamation-circle']"
        size="3x"
        class="alert"
      ></font-awesome-icon>
    </section>
    <section class="container section">
      <p class="instructions">
        Svuota la sala e crea nuovi tavoli in base alla disposizione di stasera.
      </p>
       <p class="instructions" ><br>I tavoli che hanno ordinato non verranno eliminati.</p>
    </section>
    <primary-button class="primary-button" text="Elimina"></primary-button>
  </div>
</template>

<script>
import PrimaryButton from "../../UI/buttons/PrimaryButton";
export default {
  components: {
    PrimaryButton,
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
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.delete-tables-header {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: red;
}
.instructions {
  color: var(--primarybrown);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 1rem;
  line-height: 1.2;
  padding: 0 1rem;
}
.alert {
  color: red;
}

.primary-button {
  margin-top: 1.5rem;
  letter-spacing: 0.5px;
  background-color: red !important;
  color:white !important;
  background-image: none !important;
}
</style>
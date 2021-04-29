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
  justify-content: space-evenly;
}

.section {
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.delete-tables-header {
  font-family: "Raleway", sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--pizzered);
}
.instructions {
  color: var(--primarybrown);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-bottom: 0.8rem;
  line-height: 1.8;
  padding: 0 0.8rem;
  text-align: center;
}
.alert {
  color: var(--pizzered);
  margin-top: 0.8rem;
}

.primary-button {
  letter-spacing: 0.5px;
  background-color: var(--pizzered) !important;
  color:white !important;
  background-image: none !important;
}
</style>
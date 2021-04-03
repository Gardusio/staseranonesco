<template>
  <div class="container">
    <span class="title">Elimina Ordine</span>
    <span class="instructions"
      >Elimina l'ordine e libera il tavolo.
      <span style="font-weight: bold"> ATTENTO </span>, tutte le righe d'ordine
      verranno cancellate!
    </span>
    <span class="instructions evidence">Vuoi liberare il tavolo?</span>
    <primary-button class="alert" text="Elimina ordine"></primary-button>
  </div>
</template>

<script>
export default {
  props: ["header"],
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

.title {
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  font-size: 2.8rem;
  color: red;
  letter-spacing: 1px;
  margin-top: -1rem;
}

.instructions {
  font-family: "Montserrat", "sans-serif";
  font-size: 1.5rem;
  color: var(--mainbrown);
  text-align: center;
}

.alert {
  background-color: red;
  color: white;
  background-image: none;
}

.evidence {
  font-weight: bold;
}

.mark {
  color: var(--evidenceorange);
  font-weight: bold;
}
</style>
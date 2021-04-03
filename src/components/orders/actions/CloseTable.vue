<template>
  <div class="container">
    <span class="title">Ordine {{ header }}</span>
    <span class="instructions"
      >Chiudendo il tavolo consideri quest'ordine concluso. Potrai riaprirlo in
      <span class="mark">Sala</span>.</span
    >
    <span class="instructions evidence">È uscito tutto?</span>
    <primary-button text="Tutto!"></primary-button>
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
  color: var(--mainbrown);
  letter-spacing: 1px;
  margin-top: -1rem;
}

.instructions {
  font-family: "Montserrat", "sans-serif";
  font-size: 1.5rem;
  color: var(--mainbrown);
  text-align: center;
}

.evidence {
    font-weight: bold;
}

.mark {
    color: var(--evidenceorange);
    font-weight: bold;
}
</style>
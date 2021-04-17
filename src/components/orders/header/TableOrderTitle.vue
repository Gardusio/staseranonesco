<template>
  <div class="container">
    <span class="title">Tavolo 2</span>
    <span class="waiting">Aspetta da 25 minuti (20.15)</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: absolute;
  width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  left: 9%;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Raleway", "sans-serif";
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--mainbrown);
}

.waiting {
  font-family: "Montserrat", "sans-serif";
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: var(--mainbrown);
}
</style>
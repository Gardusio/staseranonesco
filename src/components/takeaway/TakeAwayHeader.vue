<template>
  <div class="container">
    <span class="title">Asporto</span>
    <fasce-widget></fasce-widget>
  </div>
</template>

<script>
import FasceWidget from "../UI/layouts/FasceWidget";
export default {
  components: { FasceWidget },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.title {
  font-family: "Raleway", "sans-serif";
  font-weight: 500;
  font-size: 2rem;
  color: var(--mainbrown);
}
</style>

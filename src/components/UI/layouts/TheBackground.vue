<template>
  <div class="background">
  </div>
</template>

<script>

export default {};
</script>

<style scoped>
.background {
  background: url("../../../assets/images/filterBackground.png"),
    url("../../../assets/images/background.png");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index:-1000
}
</style>
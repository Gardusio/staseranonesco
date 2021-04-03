<template>
  <div class="circle-container">
    <font-awesome-icon :icon="['fas', 'plus']" size="2x" class="plus">
    </font-awesome-icon>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.circle-container {
  display: flex;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: var(--mainbrown);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.plus {
  color: #EFD3AE;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
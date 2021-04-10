<template>
  <div class="actions-container">
    <font-awesome-icon
      class="icon"
      :icon="['fas', 'print']"
      size="lg"
    ></font-awesome-icon>
    <font-awesome-icon
      class="icon"
      :icon="['fas', 'receipt']"
      size="lg"
    ></font-awesome-icon>
    <font-awesome-icon
      class="icon"
      :icon="['fas', 'chair']"
      size="lg"
    ></font-awesome-icon>
    <font-awesome-icon
      :icon="['fas', 'check-circle']"
      size="lg"
      class="icon"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.actions-container {
  width: 100%;
  padding: 1.25rem;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.icon {
  color: var(--mainbrown);
}
</style>
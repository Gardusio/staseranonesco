<template>
  <div class="actions-container">
    <font-awesome-icon
      class="icon"
      :icon="['fas', 'print']"
      size="lg"
      @click="$emit('showPrintOrder')"
    />
    <font-awesome-icon
      class="icon"
      :icon="['fas', 'receipt']"
      size="lg"
      @click="$emit('showBill')"
    />
  </div>
</template>

<style scoped>
.actions-container {
  width: 90%;
  padding: 1rem;
  margin:auto;
  padding-bottom: 0.5rem;
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.icon {
  color: var(--mainbrown);
}
</style>
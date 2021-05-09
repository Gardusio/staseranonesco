<template>
  <div class="fasce-hour-actions">
    <div @click="$emit('up')">
      <font-awesome-icon
        class="fasce-action"
        :icon="['fas', 'chevron-up']"
        size="lg"
      ></font-awesome-icon>
    </div>
    <div @click="$emit('down')">
      <font-awesome-icon
        class="fasce-action"
        :icon="['fas', 'chevron-down']"
        size="lg"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.fasce-action {
  color: var(--mainbrown);
}

.fasce-hour-actions {
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>

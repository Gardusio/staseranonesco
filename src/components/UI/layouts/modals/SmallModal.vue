<template>
  <div class="modal-mask" @click.self="$emit('close')">
    <div class="modal-content-container">
      <font-awesome-icon
        @click.self="$emit('close')"
        :icon="['fas', 'times-circle']"
        class="modal-close-icon"
        size="lg"
      ></font-awesome-icon>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style scoped>
.modal-content-container {
  background: rgba(255, 255, 255, 1);
  height: 50%;
  width: 30%;
  padding: 1rem;
  border-radius: 24px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  z-index: 10;
  position: fixed;
  margin-left: 90px;
}
</style>
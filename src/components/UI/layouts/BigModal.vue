<template>
  <div class="modal-mask" @click.self="$emit('close')">
    <div class="container">
      <font-awesome-icon
        @click="$emit('close')"
        :icon="['fas', 'times-circle']"
        size="lg"
        class="close-icon"
      ></font-awesome-icon>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(119, 122, 123, 0.4);
  display: flex;
  transition: opacity 0.3s ease;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  height: 70%;
  width: 30%;
  padding: 1rem;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 10;
  position: fixed;
}

.close-icon {
  color: #2d150b;
  cursor: pointer;
  position: absolute;
  top: 2;
  right: 20px;
}
</style>
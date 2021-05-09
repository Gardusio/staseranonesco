<template>
  <div class="order-actions-item">
    <font-awesome-icon
      :icon="icon"
      class="order-actions-item-icon"
      size="2x"
    />
    <span class="order-actions-item-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ["icon", "text"],
};
</script>

<style scoped>
.order-actions-item {
  background-image: linear-gradient(180deg, #2d150b 0%, #623d22 120%);
  color: white;
  border-radius: 26px;
  border: 2px solid white;
  filter: drop-shadow(0px 3px 3px rgba(45, 21, 11, 1));
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 6.25rem;
  width: 6.25rem;
  font-weight: 400;
}

.order-actions-item-text {
  font-family: "Raleway";
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-top: 0.75rem;
}

.order-actions-item-icon {
  margin-top: 1rem;
}
</style>

<template>
  <div class="order-header-title-container">
    <span class="order-title">{{ title }}</span>
    <span class="order-waiting">{{ waiting }}</span>
  </div>
</template>

<script>
export default {
  props: ["title", "waiting"],
};
</script>

<style scoped>
.order-header-title-container {
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
  align-items: center;
}

.order-title {
  font-family: "Raleway", "sans-serif";
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--mainbrown);
  width: 66%;
}

.order-waiting {
  font-size: 1.25rem;
  margin-top: 0.5rem;
  color: var(--mainbrown);
}
</style>

<template>
  <button class="primary-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
.primary-button {
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0 2rem;
  outline: none;
  border: none;
  color: white;
  background-color: var(--primarybrown);
  background-image: linear-gradient(180deg, #2d150b 0%, #623d22 120%);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 24px;
  margin-bottom: 1rem;
  width: auto;
  height: 2.5rem;
  min-height: 2.5rem;
  cursor: pointer;
}
</style>
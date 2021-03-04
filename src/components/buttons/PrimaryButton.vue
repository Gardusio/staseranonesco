<template>
        <button class="primary-button">
            {{text}}
        </button>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
.primary-button {
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0 1.5rem;
  outline: none;
  border: none;
  color: white;
  background-color: var(--primarybrown);
  background-image: linear-gradient(180deg, #2d150b 0%, #623d22 120%);
  filter: drop-shadow(0px 1px 1px rgba(45, 21, 11, 1));
  border-radius: 24px;
  margin-bottom: 1rem;
  width: auto;
  height: 2.5rem;
  cursor: pointer;
}
</style>
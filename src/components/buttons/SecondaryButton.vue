<template>
        <button class="secondary-button">
            {{text}}
        </button>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped>
.secondary-button {
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 1.5rem;
  outline: none;
  border: none;
  color: var(--primarybrown);
  background-color: white;
  filter: drop-shadow(0px 1px 1px rgba(45, 21, 11, 0.5));
  border-radius: 24px;
  margin-bottom: 1rem;
  width: auto;
  height: 2.2rem;
  cursor: pointer;
}
</style>
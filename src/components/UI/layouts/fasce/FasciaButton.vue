<template>
  <div class="button-container">{{ lower }}  {{upper ? `- ${upper}` : "" }}</div>
</template>

<script>
export default {
  props: ["lower", "upper"],
};
</script>

<style scoped>
.button-container {
  border: 1px solid var(--mainbrown);
  border-radius:4px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  color: var(--mainbrown);
  padding: 0.25rem;
  font-size: 16px;
}
</style>

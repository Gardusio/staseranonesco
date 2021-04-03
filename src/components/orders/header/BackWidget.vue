<template>
  <div class="container" @click="back()">
    <font-awesome-icon
      :icon="['fas', 'chevron-left']"
      size="2x"
      style="color: var(--mainbrown)"
    ></font-awesome-icon>
    <span class="text">Torna in {{ view }}</span>
  </div>
</template>

<script>
export default {
  props: ["view"],
  methods: {
    back() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.container {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: 6rem;
}

.text {
  font-family: "Raleway", "sans-serif";
  font-weight: 300;
  font-size: 28px;
  color: var(--mainbrown);
  margin-left: 1rem;
}
</style>